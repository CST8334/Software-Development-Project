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
import Profile from '../../pages/Profile.js';
// import Product from '../../pages/Products.js';
// import Toggle from '../Toggle.js';

afterEach(() => {
    cleanup();
});

test('Testing Parts of the Profile page', () =>{
    const {getByText} = render(<Profile></Profile>);
    const linkElement = getByText(/Last Name/i); 
    expect(linkElement).toBeInTheDocument(); //tests if any line of text say "Last Name"
    const profileElement = screen.getByTestId('save'); //gets the save button
    expect(profileElement).toBeInTheDocument(); //test if the save but is in the DOM
    expect(profileElement).toHaveTextContent('Save'); // does it say "Save"
    expect(profileElement).not.toContainHTML('<h2>') //does it contain unessisary HTML tags
    expect(profileElement).not.toBeDisabled() //tests that the save button is not disabled
});

test('Testing Parts of the Home page', () =>{
    const {getByText} = render(<CreateAccount></CreateAccount>);
    const linkElement = getByText(/Create Account/i); 
    expect(linkElement).toBeInTheDocument();
})




