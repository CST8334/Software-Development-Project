import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { FormComponent } from "./FormComponent.js";
import ReactDOM from 'react-dom';

  

export class Delete extends FormComponent {
    render() {
        return(
            <Container>
            <Top>
                            <Link id="arrow" to="/products">➜</Link>
                            <h1><b>Do you wish to delete this product?</b></h1>
                            </Top>
                            <br></br>
            
            <Form>
                <label for="delete message">By deleting this, you are deleting <b>EVERY</b> document attached to the product.</label>
                <br></br>
                <br></br>
                <Link id="products"to="/products"><StyledButton type="button" >Back</StyledButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link id="deleteconfirm" to="/ConfirmDelete"><Button type="button">Delete</Button></Link>
                
               
</Form>

</Container>






        );
    }
}
const Container = styled.div`
    padding: 1rem;
    width: 35rem;
    border-radius: 20px;
    background: rgb(var(--aw-white));
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Top = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 25px;
        margin-top: 20px;
    }

    #arrow{
        transform: rotate(180deg);
        text-decoration: none;
        color: black;
        font-size: 30px;
        margin-left: -30rem;
    }
`
const Button = styled.button`
    background: #FF0000;
    color: white;
    border: none;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    text-align: center;
    vertical-align: middle;
    margin-top: 30px;
`
const StyledButton = styled.button`
    background: white;
    color: black;
    border: 5px soild black;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    text-align: center;
    vertical-align: middle;
    margin-top: 30px;
`
const Form = styled.div`
    justify-content: center;
    align-items: center;
    
}
}
`

export default Delete;