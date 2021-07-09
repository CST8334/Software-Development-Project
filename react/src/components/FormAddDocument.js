import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Clip from '../img/clip.jpg';
import {Link} from 'react-router-dom';
import axios from 'axios'







export class FormAddDocument extends React.Component{
    
    //the state value for the radio button and selectedFile
    state = {
        value: "Certificate",
        selectedFile: null
    };
      // OnChange method that allows for selection of only one of the radio buttons
    onChange = e => {
        this.setState({value : e.target.value})
    }
    
    // A method for selecting a file and saving it to the state.
    fileSelectedHandler = event => {
        this.setState({
        selectedFile: event.target.files[0]
    })
}
//A method for uploading a file to our back end.
fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image',this.state.selectedFile, this.state.selectedFile.name);
    axios.post('',fd); //An address for the back end needs to go inside of axios.post('address here',fd);
    

}
        
    render(){
        //this gets the value out the state.
        const {value} = this.state;

        
//Below is a form using MuiThememProvider from material-ui.
return(
    <MuiThemeProvider>
    <React.Fragment>  
    <AppBar  title="Step 1: Add a Document"/>
    
    <br></br>
                    <h1>What are you Registering?</h1>
                <br></br>
                    <input type="radio" value="Certificate" checked={value === "Certificate"} onChange={this.onChange}/>
                    <label for="Certificate">Certificate</label>&nbsp;&nbsp;
                    <input type="radio" value="Report"  checked={value === "Report"} onChange={this.onChange}/>
                    <label for="Report">Report</label>
                    
                    
                <div>
                <br></br>
                    <label>County</label>&nbsp;&nbsp;
                    <select>
                    <option value=""disabled selected> Choose a Country..</option>
                    <option value="Canada">Canada</option> 
                    <option value="USA">USA</option>
                    </select>
                    </div>
                    
                    <br></br>
                       <img src={Clip} alt="paperclip" id="paperclip"/><label>Attach Files pdf,docx,jpg. size limit 15mb.</label>
                    <br></br>         
                    <br></br> 
                       <input type="file" onChange={this.fileSelectedHandler}></input>         
                       <RaisedButton onClick={this.fileUploadHandler} label="Attach" primary={true}/>
                    <br></br>
                    <br></br>
                    <Link to="/Products"><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
                      
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/FormAddDetails"><RaisedButton label="Next" primary={true}></RaisedButton></Link>
                        

    
                    </React.Fragment> 
                    </MuiThemeProvider>  
);
    }
}

     
  //exports the page
export default FormAddDocument;