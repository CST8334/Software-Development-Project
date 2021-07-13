import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'
import { FormComponent } from "./FormComponent.js";

export class FormAddDetails extends FormComponent {
    constructor(props) {
        super(props);

        console.log(props);
    }

    // Below is a form with user input using MuiThemeProvider.
    render() {
        return(
<MuiThemeProvider>
<React.Fragment>
<AppBar title="Step 2: Add Details"/>

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

  <div style={this.inputRowStyle}>
    <Link style={this.inputElementStyle} to={{ pathname: "/FormAddDocument", state: { formData: this.state } }}><RaisedButton label="Previous" primary={false}></RaisedButton></Link>
    <Link style={this.inputElementStyle} to={{ pathname: "/Products", state: { formData: this.state } }}><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
    <Link style={this.inputElementStyle} to={{ pathname: "/AddDates", state: { formData: this.state } }}><RaisedButton label="Next" primary={true}></RaisedButton></Link>
  </div>
</div>
</React.Fragment>
</MuiThemeProvider>
        );
    }
}

