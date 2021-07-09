import React, { Profiler } from 'react';
import LoginFormComponent from './components/LoginFormComponent';
import LoginPageComponent from './components/LoginPageComponent';
import FormAddDocument from './components/FormAddDocument';
import FormAddDetails from './components/FormAddDetails';
import AddDates from './components/AddDates';
import MoreInfo from './components/MoreInfo';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import styled from 'styled-components';
import NavComponent from "./components/NavComponent";
import "./index.css";
import ProfilePage from './pages/Profile';
import CreateAccount from './pages/CreateAccount';
import ForgotPass from './pages/ForgotPass';
import ForgotTwo from './pages/forgotTwo';

//this is the component that uses the server response and with the react librarys
//determains what will be shown to the user

//component that does something when it loads and what it loads is 
//the children arrgument refers to 
function PrivateRoute({ children, ...rest }) {
  return (
    <Route{...rest} render={() => {
      return window.sessionStorage.getItem("LoggedIn")
        ? children
        : <Redirect to='/login' />
    }} />
  )
}

//this is the component that uses the server response and with the react librarys
//determains what will be shown to the user
function App() {
  return (
    <div className="App" style={{ height: '100%' }}>
      <MainContent>
        <Switch>
          <Route path="/" exact>
            <LoginPageComponent />
          </Route>
          <Route path="/login" exact>
            <LoginPageComponent />
          </Route>
          <Route path="/home" exact>
            <NavComponent />
            <Home />
          </Route>
          <Route path="/products">
            <NavComponent />
            <Products />
          </Route>
          <Route path="/profile">
            <NavComponent />
            <ProfilePage />
          </Route>
          <Route path="/register">
            <CreateAccount />
          </Route>
          <Route path="/forgotpass">
            <ForgotPass />
          </Route>
          <Route path="/forgottwo">
            <ForgotTwo />
          <Route path="/FormAddDetails">
            <FormAddDetails/>
          </Route>
          <Route path="/FormAddDocument">
            <FormAddDocument/>
          </Route>
          <Route path="/AddDates">
            <AddDates/>
          </Route>
          <Route path="/MoreInfo">
            <MoreInfo/>
          </Route>
          <Route path="/FormAddDetails">
            <FormAddDetails />
          </Route>
          <Route path="/FormAddDocument">
            <FormAddDocument />
          </Route>
          <Route path="/AddDates">
            <AddDates />
          </Route>
          <Route path="/MoreInfo">
            <MoreInfo />
          </Route>
        </Switch>
      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
    height: 100%;
    background: var(--aw-lightest-grey);
`

export default App;

