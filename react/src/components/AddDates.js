import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { FormComponent } from "./FormComponent.js";

export class FormAddDates extends FormComponent {
    constructor(props) {
        super(props);

        console.log(props);
    }

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

<div style={this.formSectionStyle}>
  <div style={this.inputRowStyle}>
    <label><span style={this.rowLabelStyle}>Date Issued</span>
      <input style={this.inputElementStyle} type="date"/>
    </label>
  </div>

  <div style={this.inputRowStyle}>
    <label><span style={this.rowLabelStyle}>Certificate Renewal Initiation Date</span>
      <input style={this.inputElementStyle} type="date"/>
    </label>
  </div>

  <div style={this.inputRowStyle}>
    <label><span style={this.rowLabelStyle}>Expiration Date</span>
      <input style={this.inputElementStyle} type="date"/>
    </label>
  </div>
  <MuiThemeProvider>
            <React.Fragment>  
  <div style={this.inputRowStyle}>
    <Link style={this.inputElementStlye} to={{ pathname: "/FormAddDetails", state: { formData: this.state } }}><RaisedButton label="Previous" primary={false}></RaisedButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link style={this.inputElementStlye} to={{ pathname: "/Products", state: { formData: this.state } }}><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link style={this.inputElementStlye} to={{ pathname: "/MoreInfo", state: { formData: this.state } }}><RaisedButton label="Next" primary={true}></RaisedButton></Link>
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
export default FormAddDates;
