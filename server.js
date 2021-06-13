
const { log } = require("./util");
const { getUserByUsername } = require("./mongo");

// setup the server itself
const express = require("express");
const server = express();

const path = require("path");

const PORT = process.env.PORT || 5555;
server.use(express.static(path.join(__dirname, "/react/build"))).listen(PORT, () => {
    log(`Listening on port: ${PORT}`);
});

server.post("/login", (request, response) => {
    const header = request.header("Authorization")

    if (header) {
        const splitHeader = header.split(/\s+/);
        const scheme = splitHeader[0];
        const auth = splitHeader[1];

        if (auth) {
            const creds = Buffer.from(auth, "base64").toString("utf-8").split(":");
            log(creds);
        }
    }

    response.status(200).send('cool!');
});

server.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "/react/build/index.html"));
});

