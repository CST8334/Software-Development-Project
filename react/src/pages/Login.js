import React from 'react'
import styled from 'styled-components';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';

import { EyeFill } from '@styled-icons/bootstrap/EyeFill';

const Login = () => {
    return (
        <Container>
            <Top>
                <img src={Logo} alt="" />
                <h3>Need an Aetherwind account? <span>Create an account</span></h3>
            </Top>
            <Form>
                <label htmlFor="user">Username</label>
                <input type="text" id="user" />
                <label htmlFor="user">Password</label>
                <input type="password" id="pass" />
                {/* <StyledEyeFill /> */}
                <input type="radio" />
                <label htmlFor="remember">Remember Me</label>
                <Link to="/home">
                    <button>Login</button>
                </Link>
            </Form>
        </Container>
    )
}

// const StyledEyeFill = styled(EyeFill)`
//     position: absolute;
//     right: 50px;
//     top: 55%;
//     width: 20px;
//     cursor: pointer;
// `

const Container = styled.div`
    position: relative;
    top: 15vh;
    left: 35%;
    width: 30vw;
    height: 50vh;
    border-radius: 20px;
    background: #ececec;
`

const Top = styled.div`
    position: relative;
    img{
        position: inherit;
        left: 30%;
    }
    h3{
        text-align: center;
        a{
            color: black;
            text-decoration: underline;
        }
    }
`

const Form = styled.div`
input{
    width: 90%;
  padding: 12px 20px;
  margin-left: 20px;
  margin-top: 8px;
  margin-bottom: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=radio]{
    width: 20px;
}

label{
    margin-left: 20px;
}

button{
    position: relative;
    left: -1vw;
    top: 6vh;
    width: 50%;
    height: 50px;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    color: white;
    background-color: #1ea2e1;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        background-color: #1988bb;
    }
}

`




export default Login;
