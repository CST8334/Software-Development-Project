import React from 'react';
import ReactDOM from 'react-dom'; 
import Select from 'react-select';

class ExplainText extends React.Component{
  render(){
    return <p>
      Your private profile will only be visible to anyone who has access to this account.
    </p>
  }
}

const language=[
  {value: 'English', label:'English'}
]

const country=[
  {value:'Canada',label:'Canada'},
  {value:'US',label:'United States'}
]

class INFORMATION extends React.Component{
  render(){
    return(
      <form>
        <p>First Name</p>
        <input type="text"/>

        <p>Last Name</p>
        <input type="text"/>

        <p>Company</p>
        <input type="text"/>

        <p>Email</p>
        <input type="text"/>

        <p>Language</p>
        <select>
            {language.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
        </select>

        <p>Country</p>
        <select>
            {country.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
        </select>

        <p>
          Select your country. This setting is saved to this browser.
        </p>

      </form>
      
    );
  }
}

class ProfilePage extends React.Component{
    render(){
      return(
        <div>
          <h1>
            Profile
          </h1>
          <ExplainText />
          <INFORMATION />
        </div>
      )
    }
}

ReactDOM.render(<ProfilePage />,document.getElementById('root'));