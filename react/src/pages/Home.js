import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components';
import HomeChart from '../components/HomeChart';

function Home() {
    return (
        <Container>
            <Nav />
            <h1>Here are the highlights of your account</h1>
            <HomeChart />
        </Container>
    )
}

const Container = styled.div`
    h1{
        text-align: center;
        margin-top: 70px;
    }
`

export default Home
