import React from 'react'
import styled from 'styled-components';
import HomeChart from '../components/HomeChart';
import TabNav from '../components/TabNav';

function Home() {
    return (
        <Container>
            <h1>Here are the highlights of your account</h1>
            <TabNav />
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
