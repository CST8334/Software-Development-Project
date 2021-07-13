import React from 'react'
import styled from 'styled-components';
import Logo from '../img/logo.png';
import Person from '../img/person.jpg';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../index.css";

/*to log out user*/

const handleLogout = history => () => {
  console.log('you have been loged out.');
  window.sessionStorage.removeItem('LoggedIn');
}

/*history of previous page location*/

const NavComponent = ({ history }) => {
  const { pathname } = useLocation();

  /*visual components for nav bar*/
  return (
    <StyledNav>
      <Link id="logo" to="/"><img src={Logo} alt="" /></Link>
      <ul id="listOne">
        <li>
          <Link to="/home">Home</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{ width: pathname === '/home' ? '3%' : '0%' }} />
        </li>
        <li>
          <Link to="/products">Products</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{ width: pathname === '/products' ? '4%' : '0%' }} />
        </li>
      </ul>
      <ul id="listTwo">
        <li>
          <Link id="profile" to="/profile">Name</Link>
          <Line id="personLine" transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{ width: pathname === '/profile' ? '3%' : '0%' }} />
          <img src={Person} alt="" id="person" />
        </li>
        <li>
          <Link id="profile" onClick={handleLogout(history)}>LogOut</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

/*styling for nav bar*/

const StyledNav = styled.nav`
    margin: auto;
    background-color: white;
    position: sticky;
    top: 0;
    height: 10vh;
    display: flex;
    justify-content: center;
    a {
        color: black;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
    }
    #listOne{
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        margin-right: 40rem;
    }
    #listTwo, li{
        display: flex;
        list-style: none;
        justify-content: flex-end;
        align-items: center;
        margin-right: 8rem;
        margin-top: -0.8rem;
        img{
          margin-left: 30px;
        }
    }
    #logo{
        img{
            width: 350px;
        }
    }
    #person{
        width: 50px;
        border-radius: 50%;
    }
    #personLine{
      right: 26vw;
    }

`

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #12a0e0;
    width: 0%;
    position: absolute;
    bottom: 30px;
    
`

export default NavComponent;
