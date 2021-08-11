AETHERWIND TECHNOLOGIES INC. FILE MANAGEMENT WEBSITE
==============================================================

# Introduction

AetherWind Technologies is a company which helps other companies develop a market strategy for their product. 
They specialize in wireless device certifications and work with the latest changes in the FCC and Industry Canada. 
The purpose of this project is to create a website which allows clients/users of Aetherwind to upload and manage their products and certificates. 
Helps clients/users to keep track of expiring certificates.

## Authors

The authors of this website belong to Team Capital.
Team Capital's Members Are: Marko Nikic, Dan Cummings, Nicholas Hayashi,
Janio Mendonca Junior, Kim Johnson and Alice Liu.

## Full Directory Structure Description

_____________team-project-300-team-2    Our team project folder name (May differ).

__________ React
____ node_modules  nodes for React.
____ public        public extensions.

____________________________________________________ src   source
______________________________________ components  Components folder that holds components.

_______________________  _test_ Test folder that holds tests and testing setup.
__  jest-mongodb-config.js       Setup for jest to run with mongodb.
__  jest-config.js               Is used to configure Jest.
__  todo.test.js                 Unit-Testing for testing the website's functions.


__  AddDates.js                  Component for add a document form (step 3).
__  ConfirmDelete.js             Component to Confirm you want to delete a product.
__  Delete.js                    Component to delete a product.
__  FormAddDetails.js            Component for add a document form (step 2).
__  FormAddDocument.js           Component for add a document form (step 1).
__  FormComponent.js             Component for sharing data between components.
__  HomeBar.js                   Component for the Home page bar.
__  HomeChart.js                 Component for the graph on the website's Home page.
__  HomeTab.js                   Component for the Home page tab.
__  LoginFormComponent.js        Component for the login form.
__  LoginPageComponent.js        Component for the login page.
__  Modal.js                     Component for a pop up box.
__  MoreInfo.js                  Component for add a document form (step 4).                 
__  NavComponent.js              Component for navigation.
__  ProductsAdd.js               Component to add a product.
__  Reset.js                     Component for a user to reset their password.
__  Toggle.js                    Component to toggle between hide and show.

_______________ img
___ clip.jpg                      Image of a paperclip.
___ logo.png                      Image of company logo.
___ person.jpg                    Image of a person.
___ picture.jpg                   Image of background picture.
___ SampleGraph.png               Image of Sample Graph.
___ unnamed.png                   Image of a large green checkmark.

________________ pages
___ Companies.js                   The website's Companies page.                             
___ CreateAccount.js               The website's Create an Account Page.
___ ForgotPass.js                  The website's ForgotPassword Page.
___ forgotTwo.js                   The website's Page for when a user has reset thier password.
___ Home.js                        The website's Home Page.
___ Products.js                    The website's Products Page.
___ Profile.js                     The website's Profile Page.

__________________App.js            Is built for static single-page apps/websites.
__________________# index.css        A stylesheet for the website.
__________________index.js           Provides an easy entry point for components.
__________________reportWebVitals.js Used to log any results to console or send to a set endpoint.
__________________setupTests.js      This comes preconfigured with jest and react-testing-library as well.

__ package-lock.json                Automatically created when npm changes node tree or package.json.
__ package.json                     Gives information to npm to identify the project and it's dependencies.
__ README.md                        Contains information about files in the project and development.

__ credentails.js                   Credentails for loading front and backend together.
__ crypto.js                        A collection of secure cryptographic algorithms.
__ mongo.js                         MongoDB Database.
__ package-lock.json                Automatically created when npm changes node tree or package.json.
__ package.json                     Gives information to npm to identify the project and it's dependencies.
__ README.md                        Contains information about files in the project and development.
__ server.js                        A powerful server for Node.js.
__ util.js                          Functions to help update pages with javascript data.
__ package-lock-json                Automatically created when npm changes node tree or package.json.


## Project Development and Project Status.

Team Capital has built this website from scratch following mock-ups provided from our client.
We are programming the website in the computer programming language React and the database we are using is MongoDB.
We are using Visual Studio Code as well as Git Bash and Node.js to write and run the code.

PROJECT STATUS
======================================================================
The project is currently in the development stage.
The following is a list of what has been completed.

1. A user can create an account.
2. A user can login.
3. A user can log out.
4. A user profile created.
5. Forgot password and Reset password created. (Only skeletons)
6. Products page created.
7. Add a document forms created.
8. Delete a product forms created.
9. A user can add a product.
10. A user can add a document.
11. A user can delete a product.
12. Home page created.
13. Home page graph created.
14. Companies page created. (Only skeleton).
15. unit testing done
16. security for passwords.
17. mongo backend done as per need code so far.
18. you can search the products page.
19. The website has a professional look though-out. 
20. We did cross-Browser Testing.

Things that still need to be impletemented in the website/project are:

1. Forgot password which will need a third party or maybe using nodemailer but either way you will need some kind of mail server to be able to send out emails.

2. Invite A User this will also need to use some kind of mail server to be able to send out emails.

3. Companies page will need to be completed but should be similar to the products page.

4. Profile page needs to be able to upload a profile picture, and edit profile.

## Know Bugs Or Issues.
Currently there are no known bugs.
Only issue discovered during cross-browser testing is that our website does not work on Internet Explorer.
The reason for this is because Internet Explorer is now an out dated web browser and has been replaced by Microsoft Edge.
Our website does work on Microsoft Edge, so those using Explorer will need to upgrade the browser to Edge.

## Full Instructions For Implementation Of Your Product.

For the implementation of the website you will need either a computer programming student or a web developer.

1. Download the source code and build the react application (npm run build). Copy the built application to the machine running the backend server, and configure it to serve the application.

2. Find or Buy hosting for the backend server. Depending on your solution you might have to manually copy the backend server files to the machine hosting it and install dependencies like nodejs.

3. Find or Buy hosting for the MongoDB instance. Note you can host it on the same machine as the backend server if you want. 
Depending on your solution you might have to manually install it and configure an admin account/secure the instance.

4. Configure the backend server to point to the right MongoDB instance. This will depend on where you have hosted it. 

5. Find or Buy a domain registration.

There is a possibility of more steps inculded in the implementation of the website but are currently unknown.
Once the website is hosted you will need a web developer on hand to do things such as: updates, handle any bugs(errors) that arise. 

## Full Instructions For Transition To A Production Environment.


During this stage before hosting the website you should do some more testing.
Usablitliy testing- Which is a user will use the website, test that it works as it should and is user friendly.
Security testing- Testing the security of the website to assure there are no security vulnerabilities prior to the hosting of the website.
Transferring the project/website to the client.
Once this is complete you can then start the steps above in the implementation or hosting of the website.

## Full Instructions For Testing The Installation.

Once the website has been hosted. 
You should have a web developer to test the following.

1. Web Load testing - Testing loading time.

2. Web Stress testing - Testing the stress load of the website.

3. Security testing- More security testing is always a good thing.

After testing is completed, all that will be necessary is to maintain the website.


Written by: Kim Johnson of Team Capital

Original Project Setup ReadMe Is Listed Below

======================================================
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
