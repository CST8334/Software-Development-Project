import React, { useState } from 'react';
import styled from 'styled-components'

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <Container>
            <div layout className="question" onClick={() => setToggle(!toggle)}>
                <h4 layout>Blender</h4>
                <p>Documents Expired</p>
                <p>Version</p>
                <h4><a>Add Document</a></h4>
                <h4><a>Delete</a></h4>
                {toggle ? children : ""}
            </div>
        </Container>
    )
}

// const ChildContainer = styled.div`
//     display: flex;
//     flex-direction: column;
// `

const Container = styled.div`
    height: 5vh;
    .question{
        display: grid;
        grid-template-columns: 11vw 11vw 11vw 11vw 11vw;
    }
`


export default Toggle;