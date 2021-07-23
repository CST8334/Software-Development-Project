import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Clip from '../img/clip.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { FormComponent } from "./FormComponent.js";

export class FormAddDocument extends FormComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: "Certificate",
      selectedFile: null
    };
  }

  // OnChange method that allows for selection of only one of the radio buttons
  onChange = e => {
    this.setState({ value: e.target.value })
  }

  // A method for selecting a file and saving it to the state.
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  // A method for uploading a file to our back end.
  fileUploadHandler = () => {
    if (this.state.selectedFile) {
      const gb = (fileData) => {
        return resolve => {
          const reader = new FileReader();
          reader.readAsArrayBuffer(fileData);
          reader.onload = () => {
            const arrayBuffer = reader.result;
            resolve(new Uint8Array(arrayBuffer));
          }
        }
      }

      new Promise(gb(this.state.selectedFile)).then(
        data => {
          const body = {
            blob: data,
            name: this.state.selectedFile.name
          };

          axios.post('/documents', body); //An address for the back end needs to go inside of axios.post('address here',fd);
        }
      );
    }
  }

  render() {
    //this gets the value out the state.
    const { value } = this.state;

    // Below is a form using MuiThememProvider from material-ui.
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Step 1: Add a Document" />
          <div style={this.formSectionStyle}>
            <h1 style={{ marginBottom: "10px" }}>What are you Registering?</h1>
            <div style={this.inputRowStyle}>
              <label for="Certificate">
                <input style={this.inputElementStyle} type="radio" value="Certificate" checked={value === "Certificate"} onChange={this.onChange} />
                Certificate
              </label>
              <label for="Report">
                <input style={this.inputElementStyle} type="radio" value="Report" checked={value === "Report"} onChange={this.onChange} />
                Report
              </label>
            </div>
            <div style={this.inputRowStyle}>
              <label>Country:</label>
              <select style={this.inputElementStyle}>
                <option value="" disabled selected>Choose a Country...</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div style={this.inputRowStyle}>
              <img style={{ height: "1.5em" }} src={Clip} alt="paperclip" id="paperclip" /><label>Attach Files pdf,docx,jpg. size limit 15mb.</label>
              <input style={this.inputElementStyle} type="file" accept=".pdf, .docx, .jpg" onChange={this.fileSelectedHandler}></input>
            </div>

            <div style={this.inputRowStyle}>
              <RaisedButton style={this.inputElementStyle} onClick={this.fileUploadHandler} id="attachBtn" label="Attach" primary={true} />
              <Link style={this.inputElementStyle} to={{ pathname: "/Products", state: { formData: this.state } }}><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>
              <Link style={this.inputElementStyle} to={{ pathname: "/FormAddDetails", state: { formData: this.state } }}><RaisedButton label="Next" primary={true}></RaisedButton></Link>
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

