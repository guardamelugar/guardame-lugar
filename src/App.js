import React from 'react';
import './App.css';
import SignupContainer from './components/SignupContainer';
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="signup" />
        <Route exact path="/signup" component={SignupContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
