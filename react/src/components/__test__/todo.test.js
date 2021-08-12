//This is a Testing Unit Test file. The imports need to be adjusted
import { render, screen, cleanup } from '@testing-library/react';
//import renderer from 'react-test-renderer';
//import React from 'react';
// import Canvas from 'react-canvas';
//import LoginFormComponent from '../LoginFormComponent.js';
//import LoginPageComponent from '../LoginPageComponent.js';
//import CreateAccount from '../../pages/CreateAccount.js';
// import HomeChart from '../HomeChart.js';
// import Home from '../../pages/Home.js';

// import { cleanup } from '@testing-library/react';
//import Profile from '../../pages/Profile.js';


afterEach(() => {
    cleanup();
});

//adding mongo client to jest
const { MongoClient } = require('mongodb');
const fs = require("fs");

let creds;
{
    const credentialsPath = "../credentials.json";

    try {
        const jsonstring = fs.readFileSync(credentialsPath);

        try {
            creds = JSON.parse(jsonstring);

        } catch (e) {
            console.log("Bad JSON in your credentials file. You shouldn't been editing that anyway.");
            process.exit(1);
        }
    } catch (e) {
        console.log(`Failed to read credentials file at ${credentialsPath}. Ask Nick.`);
        process.exit(1);
    }
}

//testing class
describe('Upload Files', () => {
    let connection;
    let db;
    const mongo_url = `mongodb://${creds.mongoUsersAdminUsername}:${creds.mongoUsersAdminPassword}@${creds.mongoIP}:${creds.mongoPort}`;

    //before anything, jest will connect to the mongo database
    beforeAll(async () => {
        connection = await MongoClient.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        db = await connection.db();
    });

    //after jest is done, it will close the connection
    afterAll(async () => {
        await connection.close();
    });

    beforeEach(async () => {
        await db.collection('users').deleteOne({
            _id: "ObjectId(1111111)",
        });

        await db.collection('users').deleteOne({
            _id: "ObjectId(2222222)",
        });

        await db.collection('users').deleteOne({
            _id: "ObjectId(3333333)",
        });

        await db.collection('users').deleteOne({
            _id: "ObjectId(9999999)",
        });
        
        await db.collection('products').deleteOne({
            _id: "ObjectId(0000000)",
        })

        await db.collection('products').deleteOne({
            _id: "ObjectId(2222222)",
        })
        await db.collection('products').deleteOne({
            _id: "ObjectId(333333)"
        })
    });


    // test('Testing Parts of the Home page', () => {
    //     const { getByText } = render(<CreateAccount></CreateAccount>);
    //     const linkElement = getByText(/Create Account/i);
    //     expect(linkElement).toBeInTheDocument();
    // })

    //testing to READ a USER in database
    it('should read the user collection', async () => {
        const user = db.collection('users');

         const mockUser = {
             _id: "ObjectId(2222222)"
         }
         await user.insertOne(mockUser);
        const insertedUser = await user.findOne({
            _id: "ObjectId(2222222)",
        });
        expect(insertedUser._id).toEqual("ObjectId(2222222)");
    });

    //testing to INSERT a USER in database
    it('should insert into users collection', async () => {
        const user = db.collection('users');

        const mockUser = {
            _id: "ObjectId(1111111)",
            uuid: "1010101",
            username: "testUser",
            pwd: "f86s89fg8sd7g",
            salt: "2jn23jn24jn24jn"
        }
        await user.insertOne(mockUser);
        const insertedUser = await user.findOne({
            _id: "ObjectId(1111111)",
        });
        expect(insertedUser).toEqual(mockUser);
    });

    //testing to UPDATE a USER in database
    it('should update into users collection', async () => {
        const user = db.collection('users');

        const mockUser = {
            _id: "ObjectId(9999999)",
            uuid: "9999999",
            username: "testUser",
            pwd: "f86s89fg8sd7g",
            salt: "2jn23jn24jn24jn"
        }
        await user.insertOne(mockUser);
        const insertedUser = await user.findOne({
            _id: "ObjectId(9999999)",
        });
        expect(insertedUser).toEqual(mockUser);
        
        var myquery = { _id: "ObjectId(9999999)" };
        var newvalues = { $set: {username: "UnitTest" } };
        user.updateOne(myquery, newvalues);
        
        const findedUser = await user.findOne({
            _id: "ObjectId(9999999)",
        });

        expect(findedUser.username).toEqual("UnitTest");
    });

    //testing to DELETE a USER in database
    it('should delete a user from users collection', async () => {
        const user = db.collection('users');

         const mockUser = {
             _id: "ObjectId(3333333)"
         }
        await user.insertOne(mockUser);
        var items = await user.countDocuments();
        //console.log(items);
        //const userSize = user.length;
        const deletedUser = await user.deleteOne({
            _id: "ObjectId(3333333)"
        })
        var itemsAfterDelete = await user.countDocuments()
        //console.log(itemsAfterDelete);
        expect(itemsAfterDelete).toEqual(items-1);
    });

    //testing READ a PRODCUT into database
    it('should read a product into products collection', async () => {
        const products = db.collection('products');

        const mockProduct = {
            _id: "ObjectId(0000000)",
            uuid: "000111",
            owner: "0",
            name: "testProduct",
            modelNumber: "T-11",
            versionNumber: "31",
            documents: []
        }
        await products.insertOne(mockProduct);
        const insertedProduct = await products.findOne({
            _id: "ObjectId(0000000)",
        });
        expect(insertedProduct._id).toEqual("ObjectId(0000000)");
    });

    //testing to INSERT a PRODUCT into database
    it('should insert into products collection', async () => {
        const products = db.collection('products');

        const mockProduct = {
            _id: "ObjectId(0000000)",
            uuid: "000111",
            owner: "0",
            name: "testProduct",
            modelNumber: "T-11",
            versionNumber: "31",
            documents: []
        }
        await products.insertOne(mockProduct);
        const insertedProduct = await products.findOne({
            _id: "ObjectId(0000000)",
        });
        expect(insertedProduct).toEqual(mockProduct);
    });

    //testing to UPDATE a PRODUCT in database
    it('should update into product collection', async () => {
        const products = db.collection('products');

        const mockProduct = {
            _id: "ObjectId(0000000)",
            uuid: "000111",
            owner: "0",
            name: "testProduct",
            modelNumber: "T-11",
            versionNumber: "31",
            documents: []
        }
        await products.insertOne(mockProduct);
        
        var myquery = { _id: "ObjectId(0000000)" };
        var newvalues = { $set: {name: "UnitTest" } };
        products.updateOne(myquery, newvalues);
        
        const findedProduct = await products.findOne({
            _id: "ObjectId(0000000)",
        });

        expect(findedProduct.name).toEqual("UnitTest");
    });

    //testing DELETE a PRODUCT from product database
    it('should delete product from database', async () => {
        const deleteProduct = db.collection('products');

        const mockProduct = {
            _id: "ObjectId(333333)",
            uuid: "000111",
            owner: "0",
            name: "testProduct",
            modelNumber: "T-11",
            versionNumber: "31",
            documents: []
        }
        await deleteProduct.insertOne(mockProduct);
        //console.log(deleteProduct.length)
        const deletedProduct = await deleteProduct.deleteOne({
            _id: "ObjectId(333333)"
        })
        //console.log(deleteProduct.length)
        expect(mockProduct.length + 1).toEqual(deletedProduct.length - 1)
    });

    //testing INSERT a document into PRODUCT
    it('should insert documents into products collection', async () => {
        const product = db.collection('products');
        const documents = product.documents;

        const document = {
            blob: [],
            name: "testDoc"
        }

        const mockProductDoc = {
            _id: "ObjectId(2222222)",
            uuid: "000222",
            owner: "0",
            name: "testProductDoc",
            modelNumber: "T-22",
            versionNumber: "21",
            documents: []
        }

        const afterDocs = mockProductDoc.documents.slice();
        afterDocs.push(document);
        await product.insertOne(mockProductDoc);
        await product.updateOne({
            _id: "ObjectId(2222222)",
        }, {
            $set: {
                documents: afterDocs
            }
        }
        );
        const insertedDoc = await product.findOne({
            _id: "ObjectId(2222222)",
        });
        //console.log(mockProductDoc, insertedDoc);
        expect(insertedDoc.documents.length).toEqual(mockProductDoc.documents.length + 1);
    });
});




