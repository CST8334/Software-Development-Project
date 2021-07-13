import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'
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
<MuiThemeProvider>
<React.Fragment>
<AppBar title="Step 4: Additional Information"/>
<div style={this.formSectionStyle}>
  <label style={{ marginBottom: "8px" }}>Comments</label>
  <textarea style={this.inputElementStyle} id="comments" name="comments" placeholder="Insert any notes" rows="15" cols="70"></textarea>

  <div style={this.inputRowStyle}>
    <Link style={this.inputElementStyle} to="/AddDates"><RaisedButton label="Previous" primary={false} ></RaisedButton></Link>
    <Link style={this.inputElementStyle} to="/Products"><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
    <RaisedButton label="Submit" onClick={this.submit} primary={true}/>
  </div>
</div>
</React.Fragment>
</MuiThemeProvider>
        );
    }
}

