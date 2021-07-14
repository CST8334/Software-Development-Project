import React from 'react'
import styled from 'styled-components';
import axios from "axios";
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

class CreateAccount extends React.Component {
    /*setting username and password fields*/
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
        this.testRegister = this.testRegister.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }
    /*updating username*/
    updateUsername(event) {
        this.setState({ username: event.target.value });
    }
    /*updating password*/
    updatePassword(event) {
        this.setState({ password: event.target.value });
    }
    /*regestering new user*/
    testRegister(event) {
        event.preventDefault();
        /*connecting to database for creating an account*/
        (async () => {
            /*try catch connecting to database*/
            try {
                const res = await axios.post("/register", {
                    username: this.state.username,
                    password: this.state.password,
                });
                /*compairing "codes" from server.js to give error message when wrong*/
                if (res.data.code === 0) {
                    document.getElementById("accountCreated").innerHTML = "Account Created!"
                    setTimeout(() => { window.location.href = '/login'; }, 1500)
                }
                if (res.data.code === -1) {
                    document.getElementById("alreadyUser").innerHTML = "There is already a user with that username!"
                }

                if (res.data.code === -2) {
                    document.getElementById("alreadyUser").innerHTML = "You can not have a blank password!"
                }
                if (res.data.code === -3) {
                    document.getElementById("alreadyUser").innerHTML = "your password must contain at least one capital letter"
                }
                if (res.data.code === -4) {
                    document.getElementById("alreadyUser").innerHTML = "your password must contain at least one digit number"
                }
                if (res.data.code === -5) {
                    document.getElementById("alreadyUser").innerHTML = "your password must contain at least one special character such as !@#$%^&*()_-=+|<>`~ "
                }
                if (res.data.code === -6) {
                    document.getElementById("alreadyUser").innerHTML = "your password must have a length of at least 8 characters"
                }



            } catch (e) {
                console.error(e);
            }
        })();
    }
    /*varifying password fields to make sure user has a strong password*/
    password() {
        var myInput = document.getElementById("password");
        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var length = document.getElementById("length");
        var symbol = document.getElementById("symbol");

        document.getElementById("message").style.display = "block";
        // When the user clicks outside of the password field, hide the message box
        myInput.onblur = function () {
            document.getElementById("message").style.display = "none";
        }
        myInput.onkeyup = function () {
            // Validate lowercase letters
            var lowerCaseLetters = /[a-z]/g;
            if (myInput.value.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }

            // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if (myInput.value.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }

            // Validate numbers
            var numbers = /[0-9]/g;
            if (myInput.value.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }

            // Validate length
            if (myInput.value.length >= 8) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            } else {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }

            // Validate special characters
            var symbols = /\W/g;
            if (myInput.value.match(symbols)) {
                symbol.classList.remove("invalid");
                symbol.classList.add("valid");
            } else {
                symbol.classList.remove("valid");
                symbol.classList.remove("invalid");
            }
        }
    }
    /*render create acount page*/
    render() {

        return (
            <Container>
                <Top>
                    <Link id="arrow" to="/login">➜</Link>
                    <img src={Logo} alt="" />
                    <h1>Create Account</h1>
                </Top>
                <Form >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="user"
                        value={this.state.username}
                        onChange={this.updateUsername}
                        autoComplete="off"
                        required
                    />
                    <p id="alreadyUser" style={{ color: "red" }}></p>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.updatePassword}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                        onClick={this.password}
                    />
                    <input type="submit" value="Submit" onClick={this.testRegister} />
                    <p id="accountCreated" style={{ color: "green" }}></p>
                    <p id="alreadyUser" style={{ color: "red" }}></p>
                </Form>



                <p id="accountCreated" style={{ color: "green" }}></p>
                <p id="alreadyUser" style={{ color: "red" }}></p>
                <p id="badPassword" style={{ color: "red" }}></p>


                <div id="message">
                    <h3>Password must contain the following:</h3>
                    <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                    <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                    <p id="number" class="invalid">A <b>number</b></p>
                    <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                    <p id="symbol" class="invalid">A <b>symbol character</b> such as <b>!@#$%^* .etc</b></p>
                </div>

            </Container>
        )

    }
}
/*style create account page*/
const Container = styled.div`
    padding: 1rem;
    width: 35rem;
    border-radius: 20px;
    background: rgb(var(--aw-white));
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    #message {
  display:none;
  background: #f1f1f1;
  color: #000;
  position: relative;
  padding: 20px;
  margin-top: 10px;
}

#message{
    border-radius: 20px;
}

#message p {
  padding: 10px 35px;
  font-size: 18px;
}
.valid {
  color: green;
}

.valid:before {
  position: relative;
  left: -35px;
  content: "✔";
}

/* Add a red text color and an "x" when the requirements are wrong */
.invalid {
  color: red;
}

.invalid:before {
  position: relative;
  left: -35px;
  content: "✖";
}
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

export default CreateAccount