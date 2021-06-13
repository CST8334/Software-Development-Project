
const { log } = require("./util");
const { getUserByUsername } = require("./mongo");

// setup the server itself
const express = require("express");
const expressBasicAuth = require("express-basic-auth");
const server = express();

// authentication scheme
const authentication = (expressBasicAuth({
    authorizer: async (username, password) => {
        log(await getUserByUsername(username));
        // @TODO open a mongodb connection
        // get a user with that username
        // compare passwords

        return expressBasicAuth.safeCompare(username, creds.reactAppAdminUsername)
            && expressBasicAuth.safeCompare(password, creds.reactAppAdminPassword);
    },
    unauthorizedResponse: (request) => {
        return "HEY STOP IT!!!";
    }
}));

const path = require("path");

const PORT = process.env.PORT || 5555;
server.use(express.static(path.join(__dirname, "/react/build"))).listen(PORT, () => {
    log(`Listening on port: ${PORT}`);
});

server.get("/authenticate", authentication, (request, response) => {

});

server.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "/react/build/index.html"));
});

