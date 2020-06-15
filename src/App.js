import React from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import IndexPage from './pages/IndexPage'
import AgregarGarage from './pages/AgregarGaragePage'
import ModificarGarage from './pages/ModificarGaragePage'
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="login" />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/index" component={IndexPage} />
          <Route exact path="/clientindex" component={IndexPage} />
          <Route exact path="/agregargarage" component={AgregarGarage} />
          <Route exact path="/modificargarage" component={ModificarGarage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
