import React, { Profiler } from 'react';
import LoginFormComponent from './components/LoginFormComponent';
import LoginPageComponent from './components/LoginPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import styled from 'styled-components';
import NavComponent from "./components/NavComponent";
import "./index.css";
import ProfilePage from './pages/Profile';
import CreateAccount from './pages/CreateAccount';
import ForgotPass from './pages/ForgotPass';

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
          <PrivateRoute path="/home" exact>
            <NavComponent />
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/products">
            <NavComponent />
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <NavComponent />
            <ProfilePage />
          </PrivateRoute>
          <Route path="/register">
            <CreateAccount />
          </Route>
          <Route path="/forgotpass">
            <ForgotPass />
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

