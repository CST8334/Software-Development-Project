import React from 'react';
import ReactDOM from 'react-dom'; 

class ExplainText extends React.Component{
  render(){
    return <p>
      Your private profile will only be visible to anyone who has access to this account.
    </p>
  }
}

class FNAME extends React.Component{
  render(){
    return(
      <form>
        <p>First Name</p>
        <input type="text"/>

        <p>Last Name</p>
        <input type="text"/>
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
          <FNAME />
        </div>
      )
    }
}

ReactDOM.render(<ProfilePage />,document.getElementById('root'));