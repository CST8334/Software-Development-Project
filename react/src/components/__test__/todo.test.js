//This is a Testing Unit Test file. The imports need to be adjusted
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
// import Canvas from 'react-canvas';
import LoginFormComponent from '../LoginFormComponent.js';
import LoginPageComponent from '../LoginPageComponent.js';
import CreateAccount from '../../pages/CreateAccount.js';
// import HomeChart from '../HomeChart.js';
// import Home from '../../pages/Home.js';

// import { cleanup } from '@testing-library/react';
import Profile from '../../pages/Profile.js';


afterEach(() => {
    cleanup();
});

//adding mongo client to jest
const { MongoClient } = require('mongodb');

//testing class
describe('Upload Files', () => {
    let connection;
    let db;
    let mongo_url = "mongodb://admin:ahSdTYzr7pxnaB69uJVG@35.203.81.154:29017";

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

        await db.collection('products').deleteOne({
            _id: "ObjectId(0000000)",
        })

        await db.collection('products').deleteOne({
            _id: "ObjectId(2222222)",
        })
    });


    test('Testing Parts of the Home page', () => {
        const { getByText } = render(<CreateAccount></CreateAccount>);
        const linkElement = getByText(/Create Account/i);
        expect(linkElement).toBeInTheDocument();
    })

    //testing to see if user is in database
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

    //testing to see if product is in database
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
        console.log(mockProductDoc, insertedDoc);
        expect(insertedDoc.documents.length).toEqual(mockProductDoc.documents.length + 1);
    });
});




