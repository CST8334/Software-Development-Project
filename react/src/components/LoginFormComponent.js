
import React from 'react'
import styled from 'styled-components';
import Logo from '../img/logo.png';
import axios from "axios";
import "../index.css";

import { Link, Route, Redirect } from 'react-router-dom';

class LoginFormComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { username: "", password: "" };

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.testRegister = this.testRegister.bind(this);
    }

    updateUsername(event) {
        this.setState({ username: event.target.value });
    }

    updateUsername(event) {
        this.setState({ username: event.target.value });
    }

    updatePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        (async () => {
            try {
                const res = await axios.post('/login', {}, {
                    auth: {
                        username: this.state.username,
                        password: this.state.password
                    }
                });
                if (res.data.code === 0) {
                    window.sessionStorage.setItem("LoggedIn", true)
                    window.location.href = '/home';
                }
                if (res.data.code === 99) {
                    console.log('wrong password')
                    alert(res.data.msg);
                }
            } catch (e) {
                console.error(e);
            }
        })();
    }

    testRegister(event) {
        event.preventDefault();

        (async () => {
            try {
                const res = await axios.post("/register", {
                    username: this.state.username,
                    password: this.state.password,
                });

            } catch (e) {
                console.error(e);
            }
        })();
    }


    render() {
        return (
            <Container>
                <Top>
                    <img src={Logo} alt="" />
                    <h3 style={{ marginBottom: "20px" }}>Need an Aetherwind account?
                        <Link
                            style={{ marginLeft: "0.5rem", textDecoration: "underline", fontWeight: "bold", cursor: "pointer", color: "black" }}
                            to="/register"
                        >
                            Create an account
                        </Link>
                    </h3>
                </Top>
                <Form >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="user"
                        value={this.state.username}
                        onChange={this.updateUsername}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.updatePassword}
                    />

                    <Footer>
                        <FlexRow>
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </FlexRow>
                        <Link style={{ color: "black" }} to="/forgotPass" id="rememberMe">Forgot Password</Link>
                    </Footer>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </Form>
            </Container>
        )
    }
}

// const StyledEyeFill = styled(EyeFill)`
//     position: absolute;
//     right: 50px;
//     top: 55%;
//     width: 20px;
//     cursor: pointer;
// `

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Footer = styled.div`
    width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    padding: 1rem;
    width: 35rem;
    border-radius: 20px;
    background: rgb(var(--aw-white));
`

const Top = styled.div`
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export default LoginFormComponent;

