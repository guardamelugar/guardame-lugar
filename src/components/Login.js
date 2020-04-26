import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/Forms.css';

class Login extends Component {

  state = {
    ...this.state,
    password: "",
    mail: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e, formData) => {
    e.preventDefault();

  }

  handleErrorSubmit = (e, formData, errorInputs) => {
    console.error(errorInputs)
  }

  render() {
    return (
      <Col className='fondito login-box rounded'>
        <h4>Logueate</h4>
        <Form onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit} className="loginForm">
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control name="mail" id="mail" type="email"
              value={this.state.mail}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" id="password" type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <div className='text-center'>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Col>
    );
  }
}

export default Login;