import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal'
<<<<<<< Updated upstream
import ProductsAdd from '../components/ProductsAdd'
=======
import {Link} from 'react-router-dom'




>>>>>>> Stashed changes

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}

const Products = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
<<<<<<< Updated upstream

        <Container>
            <header1>
                <h1><b>Products</b></h1>
            </header1>
            <header2>
                <div class="sort">
                    <label>Sort by: </label>
                    <select>
                        <option value="" disabled selected>Choose..</option>
                        <option value="1">Status</option>
                        <option value="2">Alphabetical</option>
                    </select>
=======
        
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
                <Link to="/FormAddDocument"><button type="button">ADD DOCUMENT</button></Link>&nbsp;&nbsp;
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
>>>>>>> Stashed changes
                </div>
            </header2>
            <header3>
                <input id="search" type="text" placeholder="Search.." />
            </header3>
            <header4>
                <div class="topnav">
                    <button onClick={() => setIsOpen(true)}> Create Product </button>
                    <div style={BUTTON_WRAPPER_STYLES}>
                        <Modal open={isOpen} onClose={() => setIsOpen(false)} />

                    </div>
                </div>
            </header4>
            <sidebar>
                <div class="sidebarchild">
                    <div>
                        <h2>Filter</h2>
                        <label id="label" for="compliance">Compliance Status</label>
                        <br />
                        <select id="compliance">
                            <option value="COM">Compliant</option>
                            <option value="STE">Soon to Expire</option>
                            <option value="EXP">Expired</option>
                        </select>
                    </div>
                    <div>
                        <label id="label" for="country">Country</label>
                        <br />
                        <select id="country">
                            <option value="USA">United States</option>
                            <option value="BRA">Brazil</option>
                            <option value="CAN">Canada</option>
                            <option value="MEX">Mexico</option>
                        </select>
                    </div>

                    <div>
                        <label id="label" for="body">Issuing Body</label>
                        <br />
                        <select id="body">
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                            <option value="Option 4">Option 4</option>
                        </select>
                    </div>
                    <CheckBox>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label><label className="Switch">Show products whose documents have unread comments </label>
                    </CheckBox>
                </div>
            </sidebar>
            <main>
                <MainGrid>
                    <mg1>
                        <ProductsAdd />
                    </mg1>
                    <mg2>
                        <button>LOAD MORE</button>
                    </mg2>
                </MainGrid>
            </main>
        </Container>
    )
}



const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 20% 40% 10%;
    grid-template-rows: 20px auto 20px;
    grid-gap: 1rem;
    .sort{
        select{
            width: 150px;
            height: 40px;
            border: none;
            border-radius: 8px;
        }
        option{
            border-radius: 8px;
        }
    }
    #search{
        height: 40px;
        width: 13vw;
        border: none;
        border-radius: 30px;
        &::placeholder{
            padding-left: 15px;
        }
        &::focus{
            outline: none;
        }
    }
    header1{
        
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        h1{
            font-size: 30px;
            font-weight: 100;
        }
        
       
    }
    header2{
        
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: start;
        select{
            height: 30px;
        }
    }
    header3{
        
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: end;
        
           
    }
    header4{
        
        grid-column-start: 5;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: start;
        .topnav{
            form{
                width: 40vw;
            }
        }
        
        button{
            width: 150px;
            height: 40px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 8px;
        }
    }
    main{
        grid-column-start: 3;
        grid-column-end: 6;
        grid-row-start: 3;
        grid-row-end: 4;
        align-self: start;
        
      }
    sidebar{
       
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 6;
        height: 70vh;
       
      }
      
    .sidebarchild{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        h2 {
            margin-bottom: 10px;
        }
        label {
            display: block;
            margin-top: 10px;
            padding-top: 1px;
        }
        select {
             width: 200px;
             height: 40px;
             border: none;
             border-radius: 8px;
        }
        option {
            width: 200px;
        }
    }
      
      
`

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: auto auto auto;
    mg1{
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    mg2{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 3;
        button{
            position: fixed;
            bottom: 5vw;
            width: 100px;
            height: 30px;
        }
    }
   
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

export default Products