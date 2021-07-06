import React from 'react'
import Toggle from '../components/Toggle';
import styled from 'styled-components'

const ProductsAdd = () => {
    return (
        <Faq>
            <Toggle title="<Company Name>">
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

const Faq = styled.div`
    width: 55vw;
    margin: 20px;
    padding: 1px;
    background: white;
    border-radius: 8px;
    .title{
        .first{
            display: flex;
            justify-content: flex-start;
            p{
                margin-right: 35px;
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
            }
        }
    }
    .parent{
        display: grid;
        grid-template-columns: auto auto auto;
    }
    .country{
        display: flex;
        width: 15vw;
        justify-content: space-evenly;
    }
    .exp{
        display: flex;
        width: 25vw;
        justify-content: space-evenly;
        background-color: #f1b3b3;
        border-radius: 8px;
    }
    .answer{
        
        background-color: #f7f7f7;
        height: 132px;
        width: 55vw;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default ProductsAdd
