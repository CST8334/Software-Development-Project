import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal'
import ProductsAdd from '../components/ProductsAdd'
import { Link } from 'react-router-dom'
import Toggle from '../components/Toggle';

/*couple of stlyes*/
const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}
/*returning a set of html which will render when button clicked*/
const AddProduct = (props) => {
    console.log(props);
    return (
        <Faq>
            <Toggle title="<Company Name>" data={props.data}>
                <div className="answer">
                    <div className="title">
                        <div className="first">
                            <p>Certificate Name</p>
                            <button id="expired">Expired</button>
                        </div>
                        <div className="second">
                            <button id="one">Submit Request</button>
                            <button id="two">⋮</button>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="country">
                            <p>Country</p>
                            <p>Issuing Body</p>
                        </div>
                        <div className="exp">
                            <p>Issued On:</p>
                            <p>Renewal Start On:</p>
                            <p>Exp Date:</p>
                        </div>
                    </div>
                </div>
            </Toggle>
        </Faq>
    )
}
/*getting text from input and replacing tags based on input*/
const Companies = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [productList, setProductList] = useState([]);
    const buttonClick = (event, state) => {
        setProductList(productList.concat(<AddProduct key={productList.length} data={state} />));
        setIsOpen(false)
        console.log(setProductList);
    }
    const resetButton = event => {
        setProductList([]);
    }
    /*rendering companies page*/
    return (

        <Container>
            <header1>
                <h1><b>Companies</b></h1>
            </header1>
            <header2>
                <div class="sort">
                    <label>Sort by: </label>
                    <select>
                        <option value="" disabled selected>Choose..</option>
                        <option value="1">Status</option>
                        <option value="2">Alphabetical</option>
                    </select>
                </div>
            </header2>
            <header3>
                <input id="search" type="text" placeholder="Search.." />
                <button id="invite">Invite a user</button>
                {/* <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="My dialog"
                >
                    <label for="invite">Invite to Aetherwind</label>
                    <br/>
                    <input type="text" />
                    <br/>
                    <button onClick={toggleModal}>Add user</button>
                    <br/>
                    <button onClick={toggleModal}>Send invite</button>
                </Modal> */}
            </header3>
            
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
                    
                </div>
            </sidebar>
            <main>
                <MainGrid>
                    <mg1>
                        <button>LOAD MORE</button>
                    </mg1>
                </MainGrid>
            </main>
        </Container>
    )
}
/*styling companies page*/
const Faq = styled.div`
    width: 58.5vw;
    margin: 20px;
    padding: 1px;
    background: white;
    border-radius: 2px;
    box-shadow: 2px 5px 10px #dfdfdf;
    cursor: pointer;
    .title{
        .first, .second{
            display: flex;
            align-items: center;
        }
        .first{
            display: flex;
            justify-content: flex-start;
            p{
                margin-right: 35px;
                margin-left: 10px;
            }
            #expired{
                background: red;
                height: 1rem;
                width: 3rem;
                border: none;
                color: white;
                border-radius: 20px;
                font-size: 10px;
            }
        }
        .second{
            display: flex;
            justify-content: flex-end;
            margin-top: -35px;
            #one{
                background-color: #2196f3;
                border: none;
                margin-right: 20px;
                border-radius: 5px;
                width: 8vw;
                color: white;
                height: 40px;
                cursor: pointer;
            }
            #two{
                background: #d1d1d1;
                color: black;
                font-size: 25px;
                font-weight: bold;
                margin-right: 10px;
                width: 30px;
                height: 30px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
    .parent{
        display: grid;
        grid-template-columns: 297px 297px 297px;
    }
    .country{
        display: flex;
        width: 15vw;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    .exp{
        display: flex;
        width: 25vw;
        height: 70px;
        justify-content: space-evenly;
        background-color: #FFECEC;
        border-radius: 8px;
        align-items: flex-start;
    }

    .answer{
        background-color: #f7f7f7;
        height: 132px;
        width: 58.5vw;
        margin-left: -5rem;
        margin-top: 50px;
        position: absolute;
        z-index: -1;
        p{
            padding: 1rem 0rem;
        }
    }
`



const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 20% 40% 10%;
    grid-template-rows: 20px auto 20px;
    grid-gap: 1rem;

    header3{
        display: flex;
        #invite{
            width: 150px;
            height: 40px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 8px;
        }
    }

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

export default Companies

