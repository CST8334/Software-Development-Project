import React from 'react'
import styled from 'styled-components';
import HomeChart from '../components/HomeChart';
import HomeBar from "../components/HomeBar"
import "../index.css"

//recat has setup test
function Home() {
    return (
        <Container>
            <label id="title">Here are the highlights of your account</label>
            <Main>
                <Port>
                    <HomeBar>
                        <HomeTab label="Compliance">
                            <HomeChart />
                        </HomeTab>
                        <HomeTab label="Product">
                            <h3>this is product tab</h3>
                        </HomeTab>
                        <HomeTab label="Comments">
                            <h3>this is comments tab</h3>
                        </HomeTab>
                    </HomeBar>
                </Port>
                <Starboard>
                    <label id="new">What's New?</label>
                    <NoticeBars>
                        <label><h1>Expiry notice</h1></label>
                        <div>
                            <p>
                                <Button>Secondary</Button>
                                <a href="#">Dismiss</a>

                            </p>
                        </div>
                    </NoticeBars>

                    <NoticeBars>
                        <label>New stuff</label>
                        <div>
                            <p>
                                <Button>Secondary</Button>
                                <a href="#">Dismiss</a>
                            </p>
                        </div>
                    </NoticeBars>

                    <NoticeBars>
                        <label>Set a reminder</label>
                        <div>
                            <p>
                                <Button>Secondary</Button>
                                <a href="#">Dismiss</a>
                            </p>
                        </div>
                    </NoticeBars>
                </Starboard>
            </Main>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 50px;
    #title{
        font-size: 30px;
        font-weight: bold;
    }

    #new{
        font-weight: bold;
    }

    h1{
        margin-top: '3em';
    }
    h2 {
        margin: '4em 0em 2em';
    }
    h3 {
        margin-top: '2em';
        padding: '2em 0em';
    }

`
//The margins that make the split section for the middle of the page
const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`
// Starboard means right
const Starboard = styled.div`
    width: 40%;
    height: 400px;
    margin: 20px;
    padding: 1px;
    display: flex;
    flex-direction: column;
`
// Port means left
const Port = styled.div`
    width: 40%;
    flex-direction: row;
    height: 400px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    background: white;
    justify-content: space-evenly;
    border-radius: 20px;
`
const Button = styled.button`
    border-radius: 5px;
`

const NoticeBars = styled.div`
    height: 100px;
    border-radius: 20px;
    background: white;
    padding: 10px;
    margin: 10px;

    button{
        padding: 15px 32px;
        background-color: white;
        border-color: lightgrey;
        border-size: 0.5px;
        margin: 4px 2px;
        box-shadow: 1px 2px #ccc;
    }
    button:hover {
        background-color: #ccc;
    }
    a{
        padding-left: 30px;
        margin-top: 15px;
        margin-right: 110px;
        float: right;
        font-size: 12px;
        text-decoration: underline;
        text-color: #56bbe7;
    }
`


//Stuff thats in the complience, product, and comments HomeBar
const HomeTab = styled.div`
`
export default Home
