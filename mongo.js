
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

function insertNewUser(uuid, username, hashedPassword, salt) {
    return users.insertOne({
        uuid: uuid,
        username: username,
        pwd: hashedPassword,
        salt: salt
    });
}

function getAllProducts() {
    return products.find({});
}


async function insertNewProduct(uuid, requestBody) {
    if (!uuid) {
        return Promise.reject("no uuid");
    }

    const model = requestBody.model;

    if (!requestBody.ownerUUID) {
        //TODO: return error code
    }

    if (!model) {
        //TODO: return error code
    }

    return products.insertOne({
        uuid: uuid,
        ownerUUID: requestBody.ownerUUID,
        name: model.name,
        modelNumber: model.modelNumber,
        versionNumber: model.versionNumber,
        documents: []
    });
}

async function addDocumentToProduct(uuid, document, productUUID) {
    const product = await products.findOne({ ownerUUID: productUUID });

    if (!product) {
        return Promise.reject("no product with that uuid");
    }

    const documents = product.documents;
    document.uuid = uuid;
    documents.push(document);

    return products.updateOne({
        ownerUUID: productUUID,
    }, {
        $set: {
            documents: documents
        }

    });
}

function getProductsByOwnerId(ownerId) {
    return products.find({ ownerUUID: ownerId })
}

function deleteProductById(productUUID) {
    return products.deleteOne({ uuid: productUUID })
}

module.exports = { getUserByUsername, insertNewUser, insertNewProduct, addDocumentToProduct, getAllProducts, getProductsByOwnerId, deleteProductById };

