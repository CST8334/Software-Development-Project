import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Clip from '../img/clip.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';
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

                    axios.post('/products', body); //An address for the back end needs to go inside of axios.post('address here',fd);
                }
            );
        }
    }

    render() {
        //this gets the value out the state.
        const { value } = this.state;


        //Below is a form using MuiThememProvider from material-ui.
        return (
            <Container>
                <Top>
                    <Link id="arrow" to="/Products">➜</Link>
                    <h1>Step 1: Add A Document</h1>
                </Top>
                <br></br>
                <Form>
                    <h1>What are you Registering?</h1>

                    <input type="radio" value="Certificate" checked={value === "Certificate"} onChange={this.onChange} />
                    <label for="Certificate">Certificate</label>&nbsp;&nbsp;
                    <input type="radio" value="Report" checked={value === "Report"} onChange={this.onChange} />
                    <label for="Report">Report</label>


                    <br></br>
                    <br></br>
                    <label>County</label>&nbsp;&nbsp;
                    <select>
                        <option value="" disabled selected> Choose a Country..</option>
                        <option value="Canada">Canada</option>
                        <option value="USA">USA</option>
                    </select>
                    <br></br>
                    <br></br>
                    <img src={Clip} alt="paperclip" id="paperclip" /><label>Attach Files pdf,docx,jpg. size limit 15mb.</label>
                    <br></br>
                    <br></br>
                    <input type="file" onChange={this.fileSelectedHandler} multiple></input>

                    <MuiThemeProvider>
                        <React.Fragment>
                            <RaisedButton onClick={this.fileUploadHandler} label="Attach" primary={true} />
                            <br></br>
                            <br></br>
                            <Link to="/Products"><RaisedButton label="Cancel" primary={true}></RaisedButton></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/FormAddDetails"><RaisedButton label="Next" primary={true}></RaisedButton></Link>

                        </React.Fragment>
                    </MuiThemeProvider>

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

export default FormAddDocument;