import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { darkBlack, darkWhite } from "material-ui/styles/colors";
import { FormComponent } from "./FormComponent.js";

export class MoreInfo extends FormComponent {
    constructor(props) {
        super(props);

        console.log(props);
    }

    submit = () => {
        if (this.props.location) {
            console.log(this.props.location.state);
        } else {
            console.log('oh', this.props);
        }

    };

    // This form is the last form of adding a document, again accepts user input and uses MuiThemeProvider.
    render() {
        return(
           

                <Container>
<Top>
                <Link id="arrow" to="/AddDates">➜</Link>
                <h1>Step 4: Additional Information</h1>
                </Top>
                <br></br>

<Form>
  <label style={{ marginBottom: "8px" }}>Comments</label>
  <textarea style={this.inputElementStyle} id="comments" name="comments" placeholder="Insert any notes" rows="15" cols="70"></textarea>
  <MuiThemeProvider>
                <React.Fragment>
  <div style={this.inputRowStyle}>
    <Link style={this.inputElementStyle} to="/AddDates"><RaisedButton label="Previous" primary={false} ></RaisedButton></Link>
    <Link style={this.inputElementStyle} to="/Products"><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
    <RaisedButton label="Submit" onClick={this.submit} primary={true}/>
  </div>

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
