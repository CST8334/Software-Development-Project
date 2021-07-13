import React, { useState } from 'react';
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { Link } from 'react-router'

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <Container >
            <div layout className="question" onClick={() => setToggle(!toggle)}>
                <h4 layout>Blender</h4>
                <p><IoIosArrowForward id="arrow" /></p>
                <p>Documents Expired</p>
                <p>Version</p>
                <Link to="/FormAddDetails"><AiOutlinePlusCircle id="plus" /> Add Document</Link>
                <a><AiOutlineMinusCircle id="minus" />Delete</a>
                {toggle ? children : ""}
            </div>
        </Container >
    )
}

const Container = styled.div`
    height: 5vh;
    z-index: 10;
    .question{
        display: grid;
        grid-template-columns: 1vw 10vw 15vw 15vw 8vw 6.5vw;
        margin-top: 1rem;
        margin-left: 5rem;
        #plus{
            color: #2196f3;
        }
        #minus{
            color: #ff0000;
        }
        h4{
            margin-left: -50px;
            /* font-size: 20px;
            font-weight: bold; */
            .arrow{
                font-size: 25px;                
            }
        }
    }
`


export default Toggle;