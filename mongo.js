
const { log } = require("./util");

// load the *secret* credentials file
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
const mongoUrl = `mongodb://${creds.mongoUsersAdminUsername}:${creds.mongoUsersAdminPassword}@${creds.mongoIP}:${creds.mongoPort}`;

// configure connection to db and convenient global vars
let client;
let users;
let products;
(async () => {
    client = await MongoClient.connect(mongoUrl, {});

    const usersDb = client.db("users");
    users = usersDb.collection("users");

    const productsDb = client.db("products");
    products = productsDb.collection("products");
})();

function getUserByUsername(username) {
    return users.findOne({ username: username });
}

function insertNewUser(username, hashedPassword, salt) {
    return users.insertOne({
        username: username,
        pwd: hashedPassword,
        salt: salt
    });
}

module.exports = { getUserByUsername, insertNewUser };

