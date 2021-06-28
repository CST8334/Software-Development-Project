import React, { useState } from 'react';
import Toggle from '../components/Toggle';
import styled from 'styled-components';
import Modal from '../components/Modal'
import ReactDOM from 'react-dom';

const status = [
    { value: 'ShowAll', label: 'Show all' },
    { value: 'Compliant', label: 'Compliant' },
    { value: 'Soon', label: 'Soon to Expire' },
    { value: 'Expired', label:'Expired'}
  
]

class LEFTSIDE extends React.Component {
  render() {
        return (
            <form>
                <h1>Companies</h1>
                <h2>Filters</h2>
                <p>Compliance Status</p>
                <select>
                    {status.map((option) => (
                        <option value={option.value}>{option.label}</option>
                 ))}
             </select>
            </form>

    );
  }
}

class RIGHTSIDE extends React.Component{
    render(){
        
return (
    <div style={{float: 'right'}}>
        <input type="text" placeholder="Search for anything" />
        <button onClick={toggleModal}>Invite a user</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <label for="invite">Invite to Aetherwind</label>
        <br/>
        <input type="text" />
        <br/>
        <button onClick={toggleModal}>Add user</button>
        <br/>
        <button onClick={toggleModal}>Send invite</button>
      </Modal>
        </div>
);
    }
}

class Companies extends React.Component {
  render() {
    return (
      <div>
        <LEFTSIDE/>
        <RIGHTSIDE/>
      </div>
    )
  }
}

ReactDOM.render(<Companies />, document.getElementById('root'));

export default Companies