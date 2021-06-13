
import React, { useState } from 'react';
import Toggle from '../components/Toggle';
import styled from 'styled-components';
import Modal from '../components/Modal'


const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}

const Products = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        
    <Container>
        <FirstLine>
            <h1>Products</h1>
            <div class="input-field col s12">
            <label>Sort by: </label>
                <select>
                    <option value="" disabled selected>Choose..</option>
                    <option value="1">Status</option>
                    <option value="2">Alphabetical</option>
                </select>
            </div>
            <div class="topnav">
                <input type="text" placeholder="Search.." />
                <button onClick={() => setIsOpen(true)}> CREATE PRODUCT </button>
                <div style={BUTTON_WRAPPER_STYLES}>
                        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                            <form>
                                <div>
                                    <p>Product Name</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <p>Model Name</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <p>Product Version</p>
                                    <input type="text" />
                                </div>
                                <button type="button">Submit</button> 
                            </form>
                        </Modal>
                </div>
            </div> 
            
        </FirstLine>
        
        <Main>
            <ProdSelec>
                <div>
                        <div>
                            <label for="compliance">Compliance Status</label>
                            <br/>
                                <select id="compliance">
                                    <option value="volvo">Compliant</option>
                                    <option value="saab">Soon to Expire</option>
                                    <option value="opel">Expired</option>
                                </select>
                        </div>    
                        <div>
                            <label for="country">Country</label>
                            <br/>
                                <select id="country">
                                    <option value="volvo">United States</option>
                                    <option value="saab">Brazil</option>
                                    <option value="opel">Canada</option>
                                    <option value="opel">Mexico</option>
                                </select>
                        </div>
            
                        <div>
                            <label for="body">Issuing Body</label>
                            <br/>
                                <select id="body">
                                    <option value="Option 1">c</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                    <option value="Option 4">Option 4</option>
                                </select>
                        </div>
                        <CheckBox>
                            <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
                        </CheckBox>
                </div>
            </ProdSelec>
                <div>
                    <Faq>
                            <Toggle title="Company 1">
                                <div className="anwser">
                                    <p>MODEL DOCUMENT - VERSION</p>
                                </div>
                            </Toggle>
                            <Toggle title="Company 2">
                                <div className="anwser">
                                    <p>MODEL DOCUMENT - VERSION</p>
                                </div>
                            </Toggle>
                            
                    </Faq>
                </div>
                
        </Main>
    </Container>
         
    )
}

const CheckBox = styled.div`
    input[type=checkbox]{
        height: 0;
        width: 0;
        visibility: hidden;
    }

    label {
        cursor: pointer;
        text-indent: -9999px;
        width: 20px;
        height: 10px;
        background: blue;
        display: block;
        border-radius: 10px;
        position: relative;
    }

    label:after {
        content: '';
        position: absolute;
        top: px;
        left: 1px;
        width: 9px;
        height: 9px;
        background: #fff;
        border-radius: 9px;
        transition: 0.3s;
    }

    input:checked + label {
        background: grey;
    }

    input:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }

    label:active:after {
        width: 130px;
    }

    // centering
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`

const FirstLine = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`

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
const ProdSelec = styled.div`
    width: 200px;
    height: 200px;
    margin: 50px;
    padding: 10px;
    display: flex;
    background: white;
    flex-direction: column;
    border-radius: 20px;
`

const Faq = styled.div`

    width: 600px;
    height: 200px;
    margin: 20px;
    padding: 1px;
    display: flex;
    background: white;
    flex-direction: column;
    border-radius: 20px;

    display: block;
    span{
        display: block;
    }

    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default Products
