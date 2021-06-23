import React from 'react'
import styled from 'styled-components';
import Logo from '../img/logo.png';
import Person from '../img/person.jpg';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../index.css";

const handleLogout = history => () => {
  console.log('you have been loged out.');
  window.sessionStorage.removeItem('LoggedIn');
}

const NavComponent = ({ history }) => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <Link id="logo" to="/"><img src={Logo} alt="" /></Link>
      <ul>
        <li>
          <Link to="/home">Home</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{ width: pathname === '/' ? '50%' : '0%' }} />
        </li>
        <li>
          <Link to="/products">Products</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{ width: pathname === '/work' ? '50%' : '0%' }} />
        </li>
        <li>
          <Link to="/companies">Companies</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{ width: pathname === '/work' ? '50%' : '0%' }} />
        </li>
        <li>
          <Link id="profile" to="/profile">Name</Link>
          <img src={Person} alt="" id="person" />
        </li>
        <li>
          <Link id="profile" to="/profile" onClick={handleLogout(history)}>LogOut</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
    height: 5vh;
    margin: auto;
    justify-content: space-between;
    align-items:center;
    padding: 1rem 10rem;
    background-color: lightblue;
    position: sticky;
    top: 0;
    height: 6vh;

    background-color: rgb(var(--aw-white));

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: black;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
    }

    ul{
        display: flex;
        list-style: none;
        margin-left: 100px;
    }

    #logo{
        img{
            width: 200px;
        }
    }

    li{
        padding-left: 10rem;
        position: relative;
        top: 20px;
        right: 50vw;
    }

    #person{
        position: relative;
        right: -40vw;
        top: -20px;
        width: 50px;
        border-radius: 50%;
    }

    #profile{
        position: relative;
        top: -2rem;
        right: -35vw;
    }

`

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #8ecae6;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media (max-width: 1300px){
        left: 0%;
        top: 99%;
    }
`

export default NavComponent;
