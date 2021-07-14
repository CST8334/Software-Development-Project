import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'
import { FormComponent } from "./FormComponent.js";

export class FormAddDates extends FormComponent {
    constructor(props) {
        super(props);

        console.log(props);
    }

    //this form accepts user input using MuiThemeProvider.
    render(){
        return(
<MuiThemeProvider>
<React.Fragment>
<AppBar title="Step 3: Add Dates"/>
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

  <div style={this.inputRowStyle}>
    <Link style={this.inputElementStlye} to={{ pathname: "/FormAddDetails", state: { formData: this.state } }}><RaisedButton label="Previous" primary={false}></RaisedButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link style={this.inputElementStlye} to={{ pathname: "/Products", state: { formData: this.state } }}><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
    <Link style={this.inputElementStlye} to={{ pathname: "/MoreInfo", state: { formData: this.state } }}><RaisedButton label="Next" primary={true}></RaisedButton></Link>
  </div>
</div>
</React.Fragment>
</MuiThemeProvider>
        );
    }
}

