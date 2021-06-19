import React from 'react';
import ReactDOM from 'react-dom';
//Class Document created
class DOCUMENT extends React.Component{
    render(){
        return (
            //Return the following with the brackets. ()
            //Below is creating a form with elements.
            //Elements in this form are radio buttons,label,p,select,and buttons. 
            //&nbsp; is white space.
            <form>
                &nbsp;
                &nbsp;
                &nbsp;
                    <p> STEP 1: ADD A DOCUMENT</p>
                &nbsp;
                    <p>What are you Registering?</p>
                    <input type="radio" name="Certificate" value="Certificate"></input>
                    <label for="Certificate">Certificate</label>&nbsp;
                    <input type="radio" name="Report" value="Report"></input>
                    <label for="Report">Report</label><br></br>
                &nbsp;
                <div>
                    <label>County</label>&nbsp;&nbsp;
                        <select>
                        <option value=""disabled selected> Choose a Country..</option>
                        <option value="Canada">Canada</option> 
                        <option value="USA">USA</option>
                        </select>
                </div>
                        
                <div>
                <br></br>
                        <button type="button">ATTACH / UPLOAD FILE</button>
                </div>
                <br></br>
                        <button type="Cancel">CANCEL</button>
                &nbsp;&nbsp;&nbsp;
                        <button type="Next">NEXT</button>
            </form>
        );
    }
}


  
  ReactDOM.render(<DOCUMENT/>, document.getElementById('root'));
  
  export default DOCUMENT