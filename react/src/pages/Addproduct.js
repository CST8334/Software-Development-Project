import React from 'react';
import ReactDOM from 'react-dom';

class ExplainText extends React.Component {
  render() {
    return <p></p>
  }
}

class INFORMATION extends React.Component {
  render() {
    return (
      <form>
        <div>
            <p>Product Name</p>
            <input type="text" />
        </div>
        <div>
            <p>Model Name</p>
            <input type="text" />
        </div>
        <div>
            <p>Product Version</p>
            <input type="text" />
        </div>
        <button type="button">Create Product</button> 
      </form>

    );
  }
}

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Add a product
          </h1>
        <ExplainText />
        <INFORMATION />
      </div>
    )
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('root'));

export default ProfilePage