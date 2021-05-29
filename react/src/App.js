import React from 'react';
import LoginFormComponent from './pages/LoginFormComponent';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <LoginFormComponent />
        </Route>
        <Route path="/login" exact>
          <LoginFormComponent />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
