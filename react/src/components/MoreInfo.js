import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

 class MoreInfo extends React.Component{
// This form is the last form of adding a document, again accepts user input and uses MuiThemeProvider.


    render(){
        return(
            <Container>
            <Top>
                <Link id="arrow" to="/AddDates">➜</Link>
                <h1>Step 4: Additional Information</h1>
                </Top>
                <br></br>
                <Form>
                <label htmlFor="comments">Comments</label>
                <br></br>
                <textarea name="textarea" id="comments" name="comments" placeholder="  Insert any notes" rows="15" cols="70"  >
                </textarea>
                <br></br>
        
                <MuiThemeProvider>
                <React.Fragment>
            
            <Link to="/AddDates"><RaisedButton label="Previous" primary={false} ></RaisedButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/Products"><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <RaisedButton label="Submit" primary={true}/>
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

export default MoreInfo;