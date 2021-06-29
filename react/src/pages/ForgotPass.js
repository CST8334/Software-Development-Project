import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Logo from '../img/logo.png'

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
                <Top>
                    <Link id="arrow" to="/login">➜</Link>
                    <img src={Logo} alt="" />
                    <h1>Forgot Password</h1>
                </Top>
                <Form >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="user"
                        autoComplete="off"
                    // value={this.state.username}
                    // onChange={this.updateUsername}
                    />
                    <p id="alreadyUser" style={{ color: "red" }}></p>
                    <Link to="/forgot"><input type="submit" value="Next" onClick={this.testRegister} /></Link>
                    <p id="accountCreated" style={{ color: "green" }}></p>
                    <p id="alreadyUser" style={{ color: "red" }}></p>
                </Form>
            </Container>
        )
    }
}

const Container = styled.div`
    padding: 1rem;
    width: 35rem;
    border-radius: 20px;
    background: rgb(var(--aw-white));
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Top = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 25px;
        margin-top: 20px;
    }

    #arrow{
        transform: rotate(180deg);
        text-decoration: none;
        color: black;
        font-size: 30px;
        margin-left: -30rem;
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

export default ForgotPass
