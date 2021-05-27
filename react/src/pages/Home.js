import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components';

function Home() {
    return (
        <Container>
            <Nav />
            <h1>home</h1>
        </Container>
    )
}

const Container = styled.div`
`

export default Home
