import React from 'react'
import styled from 'styled-components';
import HomeChart from '../components/HomeChart';
import TabNav from '../components/TabNav';

function Home() {
    return (
        <Container>
            <label>Here are the highlights of your account</label>
            <Main>
                <Port>
                    <Tabs>
                        <button>Compliance</button>
                        <button>Product</button>
                        <button>Comments</button>
                        <Tabcontent>
                            <HomeChart/>
                        </Tabcontent>
                        <Tabcontent>
                            <h3>this is product tab</h3>
                        </Tabcontent>
                        <Tabcontent>
                            <h3>this is comments tab</h3>
                        </Tabcontent>
                    </Tabs>
                </Port>
                <Starboard>
                    <label>What's New</label>
                    <NoticeBars>
                        <label>Expiry notice</label>
                        <div>
                        <Button>Secondary</Button>
                        <a href="#">  Dismiss</a>
                        </div>
                    </NoticeBars>

                    <NoticeBars>
                    <label>New stuff</label>
                        <div>
                        <Button>Secondary</Button>
                        <a href="#">  Dismiss</a>
                        </div>
                    </NoticeBars>

                    <NoticeBars>
                    <label>Set a reminder</label>
                        <div>
                        <Button>Secondary</Button>
                        <a href="#">  Dismiss</a>
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

    h1{
        marginTop: '3em';
    }
    h2 {
        margin: '4em 0em 2em';
    }
    h3 {
        marginTop: '2em';
        padding: '2em 0em';
    }

    last {
        marginBottom: '300px';
    }
`
const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`
const Starboard = styled.div`
    width: 200px;
    height: 200px;
    margin: 20px;
    padding: 1px;
    display: flex;
    flex-direction: column;
`

const Port = styled.div`
    width: 50%px;
    height: 200px;
    margin: 20px;
    padding: 1px;
    display: flex;
    background: white;
    flex-direction: column;
    border-radius: 20px;
`
const Button = styled.button`
    border-radius: 5px;
`

const NoticeBars = styled.div`
    border-radius: 5px;
    background: white;
    padding: 1px;
    margin: 10px;
`

const Tabs = styled.div`
    overflow: hidden;
    boarder: 1px solid #ccc;
    background-color: white;
    border-radius: 20px;
    button{
        background-color: white;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
    }

    button:hover {
        background-color: #ccc;
    }

    h3{
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
        
    }

    button.active {
        background-color: #ccc;
        border: 1px solid red;
    }
`
const Tabcontent = styled.div`
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
    border: 1px solid red;
`
export default Home
