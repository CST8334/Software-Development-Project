import React from 'react'
import styled from 'styled-components';
import Logo from '../img/logo.png';
import Person from '../img/person.jpg';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../index.css";

const NavComponent = () => {
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
          <h3>Name</h3>
          <img src={Person} alt="" id="person" />
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
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
        top: -50px;
    }

    #person{
        position: relative;
        right: -40vw;
        top: -5vw;
        width: 50px;
        border-radius: 50%;
    }

    h3{
        position: relative;
        right: -600px;
        top: -40px;
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
