import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class ForgotPass extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email
        }

        axios.post('forgot', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }


    render() {
        return (
            <Container>
                <Link to="/login">Back</Link>
                <Title>Forgot Password</Title>
                <Form>
                    <input id="email"
                        type="text"
                        placeholder="Email" />
                </Form>
                <input type="submit" value="Submit" />
            </Container >
        )
    }
}

const Container = styled.div`
    display: flex;
    margin-top: 15%;
    margin-left: 25%;
    background: white;
    width: 50vw;
    height: 50vh;
    flex-direction: column;
    text-align: center;
    border-radius: 20px;
    input[type=submit] {
        width: 30%;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        margin-bottom: 40px;
        margin-left: 35%;
        padding: 12px 20px;
        margin-top: 20px;
        transition: 0.3s ease-in-out;
        &:hover{
            background-color: #1988bb;
        }
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
        width: 90%;
        text-align: left;
        font-weight: 500;
        color: rgb(var(--aw-grey));
    }

    input {
        width: 90%;
        padding: 12px 20px;
        margin-left: 20px;
        margin-top: 5px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=checkbox] {
        width: 20px;
    }

    input[type=submit] {
        width: 90%;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        margin-bottom: 40px;

        transition: 0.3s ease-in-out;
        &:hover{
            background-color: #1988bb;
        }
    }
`

const Title = styled.h1`
    font-size: 25px;
    font-weight: 500;
`

const Inputs = styled.div`
    display: flex;
    flex-direction:column;
    input{
        width: 20rem;
        margin-left: 33%;
    }

    #email{
        margin-bottom: 20px;
    }
`

export default ForgotPass
