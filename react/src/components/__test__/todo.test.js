//This is a Testing Unit Test file. The imports need to be adjusted
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
// import Canvas from 'react-canvas';
import Todo from '../todo';
// import LoginFormComponent from '../LoginFormComponent.js';
// import LoginPageComponent from '../LoginPageComponent.js';
// import HomeChart from '../HomeChart.js';
// import Home from '../../pages/Home.js';
import Profile from '../../pages/Profile.js';
// import Product from '../../pages/Products.js';
// import Toggle from '../Toggle.js';

afterEach(() => {
    cleanup();
});

test('should render non-completed  todo component', () => {
    const toduo = {id: 1, title: 'wash dishes', completed: false, };
    render(<Todo toodo={toduo}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    // expect(todoElement).toHaveTextContent('Hi')
    expect(todoElement).toHaveTextContent('wash dishes')
    // expect(true).toBe(true);
    expect(todoElement).not.toContainHTML('<strike>');
});

test('There is some text somewhere in the profile page that reads First Name', () =>{
    const {getByText} = render(<Profile></Profile>);
    const linkElement = getByText(/First Name/i);
    expect(linkElement).toBeInTheDocument();
});

test('There is some text somewhere in the profile page that reads First Name', () =>{
    const {getByText} = render(<Profile></Profile>);
    const linkElement = getByText(/Last Name/i);
    expect(linkElement).toBeInTheDocument();
});


