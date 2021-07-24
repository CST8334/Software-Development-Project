import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { FormComponent } from "./FormComponent.js";

export class FormAddDetails extends FormComponent {
    constructor(props) {
        super(props);

        console.log(props);
    }

    // Below is a form with user input using MuiThemeProvider.
    render() {
        return(
<Container>
    <Top>
    <Link id="arrow" to="/FormAddDocument">➜</Link>
                    <h1>Step 2: Add Details</h1>
                    </Top>
                    <br></br>
                    <Form>

<div style={this.formSectionStyle}>
  <div style={this.inputRowStyle}>
    <label><span style={this.rowLabelStyle}>Certificate Type</span>
      <select style={this.inputElementStyle}>
        <option value="" disabled selected>Select Certificate Type...</option>
        <option value="None">None</option>
        <option value="EMC">EMC</option>
        <option value="RF">RF</option>
        <option value="Safety">Safety</option>
        <option value="DoC">DoC</option>
        <option value="CB">CB</option>
        <option value="LoA">LoA</option>
        <option value="CoC">CoC</option>
        <option value="NoA">NoA</option>
      </select>
    </label>
  </div>

  <div style={this.inputRowStyle}>
    <label><span style={this.rowLabelStyle}>Certificate Number</span>
      <input style={this.inputElementStyle} type="text" placeholder="Insert Certificate Number" id="Certificate Number" name="Certificate Number"/>
    </label>
  </div>
  <div style={this.inputRowStyle}>
    <label><span style={this.rowLabelStyle}>Issuing Body</span>
      <input style={this.inputElementStyle} type="text" placeholder="Insert Issuing Body" id="Certificate Number" name="Certificate Number"/>
    </label>
  </div>
  <div style={this.inputRowStyle}>
    <label style={this.rowLabelStyle}>Standard and Rev.</label>
    <select style={this.inputElementStyle}>
      <option value="" disabled selected>Select...</option>
      <option value="Standard">Standard</option>
      <option value="Rev.">Rev.</option>
    </select>
  </div>
  <MuiThemeProvider>
    <React.Fragment> 
  <div style={this.inputRowStyle}>
    <Link style={this.inputElementStyle} to={{ pathname: "/FormAddDocument", state: { formData: this.state } }}><RaisedButton label="Previous" primary={false}></RaisedButton></Link>
    <Link style={this.inputElementStyle} to={{ pathname: "/Products", state: { formData: this.state } }}><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
    <Link style={this.inputElementStyle} to={{ pathname: "/AddDates", state: { formData: this.state } }}><RaisedButton label="Next" primary={true}></RaisedButton></Link>
  </div>

</React.Fragment>
</MuiThemeProvider>
</div>
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

//this exports the page
export default FormAddDetails;
