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
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                    <option value="Option 4">Option 4</option>
                                </select>
                        </div>
                        <CheckBox>
                                <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                </label><label className="Switch">Show products whose documents have unread comments </label>
                        </CheckBox>     
            </ProdSelec>
            <Document>
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
                    <button > LOAD MORE </button>           
            </Document>
        </Main>
    </Container>
         
    )
}


const Document = styled.div`
    flex-direction: column;

`

const CheckBox = styled.div`
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 20px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
   label {
       font-size: 12px;
   }
   .Switch{
       margin-left: 4px;
       font-size: 12px;
   }
`

const FirstLine = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    button {
        background-color: #ccc;
    }
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

    .Switch {
        flex-direction: row;
    }
    
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
