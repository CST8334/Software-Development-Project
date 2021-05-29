
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

// load the *secret* credentials file we use to authenticate admin users of the web app, as well as mongodb server information
const fs = require("fs");
let creds;
{
    const credentialsPath = "./credentials.json";

    try {
        creds = fs.readFileSync(credentialsPath);

    } catch (e) {
        log(`Failed to read credentials file at ${credentialsPath}. Ask Nick.`);
        process.exit(1);
    }
}

const express = require("express");
const expressBasicAuth = require("express-basic-auth");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.static(path.join(__dirname, "/react/build"))).listen(PORT, () => {
    log(`Listening on port: ${PORT}`);
});

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "/react/build/index.html"));
});

