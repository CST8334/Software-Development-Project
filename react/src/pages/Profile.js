import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import person from '../img/person.jpg'

const language = [
  { value: 'English', label: 'English' }
]

const country = [
  { value: 'Canada', label: 'Canada' },
  { value: 'US', label: 'United States' }
]

class ProfilePage extends React.Component {
  render() {
    return (
      <Container>
        <div className="top">
          <Title>
            Profile
          </Title>
          <p>
            Your private profile will only be visible to anyone who has access to this account.
          </p>
        </div>
        <Contain>
          <Form>
            <p>First Name</p>
            <input type="text" placeholder="First Name" />

            <p>Last Name</p>
            <input type="text" placeholder="Last Name" />

            <p>Company</p>
            <input type="text" placeholder="Company" />

            <p>Email</p>
            <input type="text" placeholder="Email" />

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
          </Form>
          <Photo>
            <h2>Profile Photo</h2>
            <img src={person} alt="" />
            <input type="file" />
          </Photo>
        </Contain>
        <Button data-testid="save" >Save</Button>
      </Container>
    )
  }
}

const Contain = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  h2{
    font-weight: 500;
  }
  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`

const Button = styled.button`
    background: #2196F3;
    border: none;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    text-align: center;
    vertical-align: middle;
    margin-top: 30px;
`

const Form = styled.form`
  input{
    border: none;
    width: 300px;
    height: 35px;
    border-radius: 5px;
    margin-bottom: 10px;
    &::placeholder{
      padding-left: 10px;
    }
  }

  select{
    border: none;
    width: 300px;
    height: 35px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`

const Container = styled.div`
  background-color: #F8F8F8;
  width: 50%;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  .top{
    p{
      font-size: 15px;
      margin-bottom: 20px;
    }
  }
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`

export default ProfilePage