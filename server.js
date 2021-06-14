
const { log } = require("./util");
const { getUserByUsername, registerNewUser } = require("./mongo");
const { hash, safeCompare } = require("./crypto");

// setup the server itself
const express = require("express");
const server = express();

const path = require("path");

const PORT = process.env.PORT || 5555;
server.use(express.static(path.join(__dirname, "/react/build"))).listen(PORT, () => {
    log(`Listening on port: ${PORT}`);
});

server.post("/login", async (request, response) => {
    const header = request.header("Authorization")

    // does that header even exist?
    if (header) {
        const splitHeader = header.split(/\s+/);
        const scheme = splitHeader[0]; // should be 'basic', unused though
        const auth = splitHeader[1];

        if (auth) {
            const creds = Buffer.from(auth, "base64").toString("utf-8").split(":");

            const user = await getUserByUsername(creds[0]);

            // check to see if there is a user with that username
            if (!user) {
                return response.status(400).json({
                    code: -1,
                    msg: "No user with that Username."
                });
            }

            // there is a user with that username. check if the passwords match
            if (safeCompare(user.pwd, creds[1])) {
                return response.status(200).json({
                    code: 0,
                    msg: "Succesfully logged in."
                });

            } else {
                return response.status(400).json({
                    code: -2,
                    msg: "Wrong password."
                });
            }
        }
    }

    response.status(400).json({
        code: -3,
        msg: "Invalid authorization header."
    });
});

server.post("/register", async (request, response) => {
    const status = registerNewUser(
        request.body.username,
        request.body.password
    );

    log(status);
});

server.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "/react/build/index.html"));
});

