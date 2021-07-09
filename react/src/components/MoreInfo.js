import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'
import { darkBlack, darkWhite } from "material-ui/styles/colors";

export class MoreInfo extends React.Component{
// This form is the last form of adding a document, again accepts user input and uses MuiThemeProvider.


    render(){
        return(
        <MuiThemeProvider>
            <React.Fragment>
            
            <AppBar title="Step 4: Additional Information"/>
            <br></br>
            <br></br>
            &nbsp;&nbsp; <label>Comments</label>
            <br></br>
            <br></br>
            &nbsp;&nbsp;<textarea id="comments" name="comments" placeholder="Insert any notes" rows="15" cols="70" >
            </textarea>
            <br></br>
            <br></br>
            <Link to="/AddDates"><RaisedButton label="Previous" primary={false} ></RaisedButton></Link>&nbsp;&nbsp;
            
            <Link to="/Products"><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
            
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <RaisedButton label="Submit" primary={true}/>
            </React.Fragment> 
    </MuiThemeProvider> 
        );
    }
    
}
export default MoreInfo;