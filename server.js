
const { log } = require("./util");
const { insertNewProduct, getUserByUsername, insertNewUser } = require("./mongo");
const { salt, hash, safeCompare } = require("./crypto");

// setup the server itself
const express = require("express");
const server = express();

server.use(express.json({ limit: "25mb" }));
server.use(express.urlencoded({ limit: "25mb" }));

const session = require("express-session");
const MemoryStore = require("memorystore")(session);

// trust the first proxy, useful for sessions
server.set("trust proxy", 1);

// configure session management
server.use(session({
    secret: "white-chocolate-macademia-nut",
    resave: false,
    saveUnitialized: true,
    cookie: {
        secure: true,
        maxAge: 5400 // 1hr in seconds
    },
    store: new MemoryStore({
        checkPeriod: 86400000 // 24 hr in seconds
    })
}));

function authorizationMiddleware(request, response, next) {
    // @TODO check auth.
    next();
}

const path = require("path");

const PORT = process.env.PORT || 5555;
server.use(express.static(path.join(__dirname, "/react/build"))).listen(PORT, () => {
    log(`Listening on port: ${PORT}`);
});

server.post("/login", async (request, response) => {
    const authorizationHeader = request.header("Authorization")

    // does that header even exist?
    if (authorizationHeader) {
        const splitHeader = authorizationHeader.split(/\s+/);
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
            if (safeCompare(user.pwd, hash(creds[1], user.salt))) {
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
    const alreadyExistingUser = await getUserByUsername(request.body.username);

    if (alreadyExistingUser) {
        response.status(400).json({
            code: -1,
            msg: "There is already a user with the provided username."
        });
        return;
    }

    if (!request.body.password || request.body.password.length === 0) {
        response.status(400).json({
            code: -2,
            msg: "you must enter a password"
        });
        return;
    }
    if (!request.body.password.match(/[A-z]/)) {
        response.status(400).json({
            code: -3,
            msg: "your password must contain at least one capital letter"
        });
        return;
    }
    if (!request.body.password.match(/[0-9]/)) {
        response.status(400).json({
            code: -4,
            msg: "your password must contain at least one digit number"
        });
        return;
    }
    if (!request.body.password.match(/[!@#$%^&*()_\-=+|<>`~]/)) {
        response.status(400).json({
            code: -5,
            msg: "your password must contain at least one special character such as !@#$%^&*()_-=+|<>`~ "
        });
        return;
    }
    if (request.body.password.length < 7) {
        response.status(400).json({
            code: -6,
            msg: "your password must have a length of at least 8 characters"
        });
        return;
    }

    const salt_ = salt();
    const result = await insertNewUser(request.body.username, hash(request.body.password, salt_), salt_);

    response.status(200).json({
        code: 0,
        msg: "OK"
    });
});

server.post("/products", async (request, response) => {
    const result = await insertNewProduct(request.body.name, request.body.blob);

    log(result);

    response.status(200).json({
        code: 0,
        msg: "OK"
    });
});

server.get("/*", (request, response) => {
    log(request.session.id);
    response.status(200).sendFile(path.join(__dirname, "/react/build/index.html"));
});

