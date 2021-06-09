
const { log } = require("./util");

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

// setup the mongodb driver
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
//const mongoUrl = `mongodb://${creds.mongoUsersAdminUsername}:${creds.mongoUsersAdminPassword}@${creds.mongoIP}:${creds.mongoPort}/admin`;
const mongoUrl = `mongodb://${creds.mongoIP}:${creds.mongoPort}`;
log(mongoUrl);

let usersDb;
let client = MongoClient.connect(mongoUrl, {});
log('hi');
log(client);



function getUserByUsername(username) {}

module.exports = { getUserByUsername };


