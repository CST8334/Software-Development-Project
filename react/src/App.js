import React from 'react';
import LoginFormComponent from './components/LoginFormComponent';
import LoginPageComponent from './components/LoginPageComponent';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import styled from 'styled-components';
import NavComponent from "./components/NavComponent";
import "./index.css";

function App() {
  return (
    <div className="App" style={{height: '100%'}}>
      <NavComponent />
      <MainContent>
        <Switch>
          <Route path="/" exact>
            <LoginPageComponent />
          </Route>
          <Route path="/login" exact>
            <LoginPageComponent />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/products">
            <Products />
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

