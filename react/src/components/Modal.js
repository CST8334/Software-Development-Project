import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    padding: 70px;
    z-index: 1000;
    border-radius: 8px;

    .buttons{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-evenly;
        margin-top: 10px;
    }

    #input{
        border: 1px grey solid;
        border-radius: 8px;
        width: 40vw;
    }

    h1{
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1000;
`

const BackButton = styled.div`
    background: transparent;
    border: black 1px solid;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    text-align: center;
    vertical-align: middle;
`



export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return (
        <>
            <Overlay />
            <Container>
                <h1>Create a New Product</h1>
                <form>
                    <div>
                        <p>Product Name</p>
                        <input id="input" type="text" />
                    </div>
                    <div>
                        <p>Model Name</p>
                        <input id="input" type="text" />
                    </div>
                    <div>
                        <p>Product Version</p>
                        <input id="input" type="text" />
                    </div>
                </form>
                <div className="buttons">
                    <button type="button">Create</button>
                    <BackButton onClick={onClose}> Back </BackButton>
                    {children}
                </div>
            </Container>
        </>
    )
}
