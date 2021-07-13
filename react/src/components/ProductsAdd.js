import React, { useState } from 'react'
import Toggle from '../components/Toggle';
import styled from 'styled-components'

const AddProduct = () => {
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

const ProductsAdd = () => {
    const [productList, setProductList] = useState([]);
    const buttonClick = event => {
        setProductList(productList.concat(<AddProduct key={productList.length} />));
        console.log(setProductList);
    }
    const resetButton = event => {
        setProductList([]);
    }
    return (
        <div>

            {productList}
        </div>
    )
}

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

export default ProductsAdd
