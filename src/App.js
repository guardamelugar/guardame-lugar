import React from 'react';
import './App.css';
import SignupContainer from './components/SignupContainer';
import LoginContainer from './components/LoginContainer';
import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="login" />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
