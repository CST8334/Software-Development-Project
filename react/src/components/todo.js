//This is a temporary file used for testing the Unit testing component
//delete this file when Unit testing is working
import React from 'react';

function todo({ toodo }) {
    const { id, title, completed } = toodo;
    const h1 = <h1>toodo - {title}</h1>;
    const text = completed ? <strike>{h1}</strike> : h1;
    return <div data-testid={`todo-${id}`}>{ text }</div>
}





// function todo1({ LoginFormComponent }) {
//     const { id, title, completed } = todo;
//     const h1 = <h1>todo - {title}</h1>;
//     const text = completed ? <strike>{h1}</strike> : h1;
//     return <div data-testid={`todo-${id}`}>{ text }</div>
// }

export default todo;