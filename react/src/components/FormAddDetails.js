import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'

export class FormAddDetails extends React.Component{
//Below is a form with user input using MuiThemeProvider.
render(){
return(
<MuiThemeProvider>
    <React.Fragment>  
    <AppBar title="Step 2: Add Details"/>
    <br></br>
    <label>Certificate Type</label>&nbsp;&nbsp;
                    <select>
                    <option value=""disabled selected> Select Certificate Type..</option>
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
                    <br></br>
                    <br></br>
                    <label>Certificate Number</label>&nbsp;&nbsp;
                    <input type="text" placeholder="Insert Certificate Number" id="Certificate Number" name="Certificate Number"/>
                    <br></br>
                    <br></br>
                    <label>Issuing Body</label>&nbsp;&nbsp;
                    <input type="text" placeholder="Insert Issuing Body" id="Certificate Number" name="Certificate Number"/>
                    <br></br>
                    <br></br>
                    <label>Standard and Rev.</label>&nbsp;&nbsp;
                    <select>
                        <option value=""disabled selected>Select..</option>
                        <option value="Standard">Standard</option>
                        <option value="Rev.">Rev.</option>
                    </select>
                    <br></br>
                    <br></br>
                
                    <Link to="/FormAddDocument"><RaisedButton label="Previous" primary={false}></RaisedButton></Link>&nbsp;&nbsp;
                    <Link to="/Products"><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
                    
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/AddDates"><RaisedButton label="Next" primary={true}></RaisedButton></Link>
                        

                    
    </React.Fragment> 
    </MuiThemeProvider> 

);
}

}
//this exports the page
export default FormAddDetails;