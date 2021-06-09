import React, { Profiler } from 'react';
import LoginFormComponent from './components/LoginFormComponent';
import LoginPageComponent from './components/LoginPageComponent';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import styled from 'styled-components';
import NavComponent from "./components/NavComponent";
import "./index.css";
import ProfilePage from './pages/Profile';

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

