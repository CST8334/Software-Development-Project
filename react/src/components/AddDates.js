import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

 export class FormAddDates extends React.Component{
    //this form accepts user input using MuiThemeProvider.
    render(){
        return(
            <Container>
            <Top>
                <Link id="arrow" to="/FormAddDetails">➜</Link>
                <h1>Step 3: Add Dates</h1>
                </Top>
                <br></br>
                <Form>    
            <label>Date Issued</label>&nbsp;&nbsp;
            <input type="date"/>
            <br></br>
            <br></br>
            <br></br>
            <label>Certificate Renewal Initiation Date</label>&nbsp;&nbsp;
            <input type="date"/>
            <br></br>
            <br></br>
            <br></br>
            <label>Expiration Date</label>&nbsp;&nbsp;
            <input type="date"/>
            <br></br>
            <br></br>
            <br></br>
            <MuiThemeProvider>
            <React.Fragment>  
            <Link to="/FormAddDetails"><RaisedButton label="Previous" primary={false}></RaisedButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/Products"><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/MoreInfo"><RaisedButton label="Next" primary={true}></RaisedButton></Link>
                        
            </React.Fragment> 
    </MuiThemeProvider> 
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

const Form = styled.div`
    justify-content: center;
    align-items: center;
    
}

}
`
export default FormAddDates;
