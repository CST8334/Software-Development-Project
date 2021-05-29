
// use this instead of console.log
function log(entry) {
    let str;
    if (typeof entry === 'Object' && entry !== null) {
        try {
            str = JSON.stringify(entry);

        } catch (e) {
            str = "failed to stringify a self-referential object :(";
        }
    } else {
        str = entry;
    }

    console.log(`${new Date().toLocaleString()} - aetherwind server - ${str}`);
}

// load the *secret* credentials file we use to authenticate admin users of the web server, as well as mongodb server information
const fs = require("fs");
let creds;
{
    const credentialsPath = "./credentials.json";

    try {
        const jsonstring = fs.readFileSync(credentialsPath);

        try {
            creds = JSON.parse(jsonstring);

        } catch (e) {
            log("Bad JSON in your credentials file. You shouldn't ben editing that anyway.");
            process.exit(1);
        }
    } catch (e) {
        log(`Failed to read credentials file at ${credentialsPath}. Ask Nick.`);
        process.exit(1);
    }
}

// setup the server itself
const express = require("express");
const expressBasicAuth = require("express-basic-auth");
const server = express();

// base authentication scheme, used for what little hardcoded authentication exists
const authentication = (expressBasicAuth({
    authorizer: (username, password) => {
        log(`${username} ${password} ${creds}`);
        return expressBasicAuth.safeCompare(username, creds.reactAppAdminUsername)
            && expressBasicAuth.safeCompare(password, creds.reactAppAdminPassword);
    },
    unauthorizedResponse: (request) => {
        return "HEY STOP IT!!!";
    },
    users: {
        [creds.reactAppAdminUsername]: creds.reactAppAdminPassword
    },
}));

const path = require("path");

const PORT = process.env.PORT || 5555;
server.use(express.static(path.join(__dirname, "/react/build"))).listen(PORT, () => {
    log(`Listening on port: ${PORT}`);
});

server.get("/authenticate", authentication, (request, response) => {
    console.log(request.auth);
    if (request.auth.username === creds.reactAppAdminUsername) {
        response.send("cool!");

    } else {
        // they aren't the admin, so we need to ask mongodb if they are a valid user or not.
        // @TODO
        response.send("nope");
    }
});

server.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "/react/build/index.html"));
});

