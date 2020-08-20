import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { ValidationForm, TextInput, Checkbox } from 'react-bootstrap4-form-validation'
import validator from 'validator'
import POSTSignup from '../DB Connection/POSTSignup'
import TransformSignup from '../Transform/TransformSignup'

class SignupContainer extends Component {
  state = {
    ...this.state,
    signup: {
      link: "",
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      password: "",
      confirmPassword: "",
      soydueno: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, "signup": { ...this.state.signup, [e.target.name]: e.target.value }
    })
  }

  handleChangeCheck = (e, value) => {
    this.setState({
      ...this.state, "signup": { ...this.state.signup, [e.target.name]: value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const jsonForm = TransformSignup(this.state.signup);
    POSTSignup(jsonForm); 

  }

  matchPassword = (value) => {
    return value && value === this.state.signup.password;
  }

  componentDidMount = () => {
    this.setState({
      ...this.state, "signup": { ...this.state.signup, link: window.location.origin }
    })
  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col className='fondito justify-self-center' xl={7} lg={8} md={9} sm={10}>
            <img className='img-login-normal' alt="logo" src={require("../../img/guardamelugar-iso.png")} />
            <img className='img-login-mobile' alt="logo" src={require("../../img/guardamelugar-iso.png")} />
            <h2 className='pt-4'>Registrate</h2>
            <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit} className="signupForm">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} xs='12' md='6' controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <TextInput name="nombre" id="nombre" required
                      value={this.state.signup.nombre}
                      onChange={this.handleChange}
                      pattern="^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9]{3,50}$"
                      errorMessage={{
                        required: "El nombre es requerido",
                        pattern: "El nombre debe tener entre 3 y 50 caracteres. No admite números ni ^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,"
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} xs='12' md='6' controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <TextInput name="apellido" id="apellido" required
                      value={this.state.signup.apellido}
                      onChange={this.handleChange}
                      pattern="^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9]{3,50}$"
                      errorMessage={{
                        required: "El apellido es requerido",
                        pattern: "El apellido debe tener entre 3 y 50 caracteres. No admite números ni ^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,"
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6} sm={12} controlId="email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <TextInput name="email" id="email" type="email" required
                      validator={validator.isEmail}
                      errorMessage={{ validator: "Ingresar un email válido" }}
                      value={this.state.signup.email}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={12} controlId="telefono">
                    <Form.Label>Teléfono</Form.Label>
                    <TextInput name="telefono" id="telefono" required
                      value={this.state.signup.telefono}
                      onChange={this.handleChange}
                      pattern="(?=^[0-9]*$).{5,15}"
                      errorMessage={{
                        required: "El teléfono es requerido es requerido",
                        pattern: "El teléfono sólo admite números y requiere más de 5 digitos"
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6} sm={12} controlId="password">
                    <Form.Label>Password</Form.Label>
                    <TextInput name="password" id="password" type="password" required
                      pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,15}"
                      errorMessage={{
                        required: "El password es requerido",
                        pattern: "El password necesita entre 8 caracteres, conteniendo mayúsculas, minúsculas, y números"
                      }}
                      value={this.state.signup.password}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={12} controlId="confirmPassword">
                    <Form.Label>Confirmar Password</Form.Label>
                    <TextInput name="confirmPassword" id="confirmPassword" type="password" required
                      validator={this.matchPassword}
                      errorMessage={{
                        required: "La confirmación de password es requerida",
                        validator: "El password no concuerda"
                      }}
                      value={this.state.signup.confirmPassword}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Checkbox name="soydueno" id="soydueno" type="checkbox" label="Soy dueño de un garage"
                    value={this.state.signup.soydueno}
                    onChange={this.handleChangeCheck} />
                </Form.Group>
                <Row className='justify-content-center'>
                  <Col xs={12} md={4}>
                    <Link to='/'>
                      <Button className="btn btn-block" variant="danger">
                        Volver a Login
                    </Button>
                    </Link>
                  </Col>
                  <Col xs={12} md={4}>
                    <Button className="btn btn-block" variant="primary" type="submit">
                      Registrarse
                  </Button>
                  </Col>
                </Row>
              </Form>
            </ValidationForm>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default SignupContainer;