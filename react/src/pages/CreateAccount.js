import React from 'react'
import styled from 'styled-components';
import axios from "axios";
import { Link } from 'react-router-dom'

class CreateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
        this.testRegister = this.testRegister.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);

    }

    updateUsername(event) {
        this.setState({ username: event.target.value });
    }

    updatePassword(event) {
        this.setState({ password: event.target.value });
    }

    testRegister(event) {
        event.preventDefault();

        (async () => {
            try {
                const res = await axios.post("/register", {
                    username: this.state.username,
                    password: this.state.password,
                });
                if (res.data.code === 0) {
                    document.getElementById("accountCreated").innerHTML = "Account Created!"
                    setTimeout(() => { window.location.href = '/login'; }, 1500)
                }
                if (res.data.code === -1) {
                    document.getElementById("alreadyUser").innerHTML = "There is already a user with that username!"
                }

            } catch (e) {
                console.error(e);
            }
        })();
    }


    render() {
        return (
            <Container>
                <Link to="/login">Back</Link>
                <Title>Create Account</Title>
                <Form>
                    <input id="email"
                        ref="email"
                        type="text"
                        placeholder="Email"
                        value={this.state.username}
                        onChange={this.updateUsername} />
                    <input type="text"
                        ref="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.updatePassword} />
                </Form>
                <input type="submit" value="Sign Up" onClick={this.testRegister} />
                <p id="accountCreated" style={{ color: "green" }}></p>
                <p id="alreadyUser" style={{ color: "red" }}></p>
            </Container>
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

export default CreateAccount
