import React from 'react'
import Logo from '../img/logo.png';
import styled from 'styled-components';

const Login = () => {
    return (
        <Container>
            <div className="login">
                <Top>
                    <img src={Logo} alt="" />
                    <h3>Need an AetherWind Account? <a href="#">Create an account</a></h3>
                </Top>
                <Form action="">
                    <label htmlFor="email">Username</label>
                    <input type="text" id="email" />
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" />
                    <label htmlFor="radio">Remember Me
                        <input id="remember" type="checkbox" />
                    </label>
                    <button>Log In</button>
                </Form>
            </div>
        </Container>
    )
}

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

label{
    margin-left: 20px;
}

button{
    position: relative;
    left: 7vw;
    top: 5vh;
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

export default Login
