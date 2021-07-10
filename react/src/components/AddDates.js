import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'

export class FormAddDates extends React.Component{
    //this form accepts user input using MuiThemeProvider.
    render(){
        return(
        <MuiThemeProvider>
            <React.Fragment>  
            <AppBar title="Step 3: Add Dates"/>
            <br></br>
            <label>Date Issued</label>&nbsp;&nbsp;
            <input type="date"/>
            <br></br>
            <br></br>
            <label>Certificate Renewal Initiation Date</label>&nbsp;&nbsp;
            <input type="date"/>
            <br></br>
            <br></br>
            <label>Expiration Date</label>&nbsp;&nbsp;
            <input type="date"/>
            <br></br>
            <br></br>
            <Link to="/FormAddDetails"><RaisedButton label="Previous" primary={false}></RaisedButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/Products"><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/MoreInfo"><RaisedButton label="Next" primary={true}></RaisedButton></Link>
                        


            </React.Fragment> 
    </MuiThemeProvider> 

);
}

}

export default FormAddDates;
