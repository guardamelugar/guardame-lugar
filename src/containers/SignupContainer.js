import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import validator from 'validator'
import '../styles/Signup.css';

class SignupContainer extends Component {
  state = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2)); //a cambiar cuando mandemos a backend
  }

  handleErrorSubmit = (e, formData, errorInputs) => {
    console.error(errorInputs)
  }

  matchPassword = (value) => {
    return value && value === this.state.password;
  }

  render() {
    return (
      <div className="background_image">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col className='fondito justify-self-center' md={8}>
              <h2>Registrate</h2>
              <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="nombre">
                      <Form.Label>Nombre</Form.Label>
                      <TextInput name="nombre" id="nombre" required
                        value={this.state.nombre}
                        onChange={this.handleChange}
                        pattern="(?=.[a-zA-Z]).{3,}"
                        errorMessage={{
                          required: "El nombre es requerido",
                          pattern: "El nombre debe tener tres o más letras"
                        }}
                    />
                    </Form.Group>
                    <Form.Group as={Col} controlId="apellido">
                      <Form.Label>Apellido</Form.Label>
                      <TextInput name="apellido" id="apellido" required
                        value={this.state.apellido}
                        onChange={this.handleChange}
                        pattern="(?=.[a-zA-Z]).{3,}"
                        errorMessage={{
                          required: "El apellido es requerido",
                          pattern: "El apellido debe tener tres o más letras"
                        }}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="email">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <TextInput name="email" id="email" type="email" 
                        validator={validator.isEmail} 
                        errorMessage={{validator:"Ingresar un email válido"}}
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="telefono">
                      <Form.Label>Teléfono</Form.Label>
                      <TextInput name="telefono" id="telefono" required
                        value={this.state.telefono}
                        onChange={this.handleChange}
                        pattern="(?=.[0-9]).{6,}"
                        errorMessage={{
                          required: "El teléfono es requerido es requerido",
                          pattern: "El teléfono sólo admite números"
                        }}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="password">
                      <Form.Label>Password</Form.Label>
                      <TextInput name="password" id="password" type="password" required
                        pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}"
                        errorMessage={{
                          required: "El password es requerido",
                          pattern: "El password necesita 8, conteniendo mayúsculas, minúsculas, y números"
                        }}
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="confirmPassword">
                      <Form.Label>Password</Form.Label>
                      <TextInput name="confirmPassword" id="confirmPassword" type="password" required
                        validator={this.matchPassword}
                        errorMessage={{
                          required: "La confirmación de password es requerida",
                          validator: "El password no concuerda"
                        }}
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                  </Form.Row>
                  <Form.Group controlId="soydueno">
                    <Form.Check type="checkbox" label="Soy dueño de un garage" />
                  </Form.Group>
                  <       div className='text-center'>
                    <Button variant="primary" type="submit">
                      Registrarse
                    </Button>
                  </div>
                </Form>
              </ValidationForm>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignupContainer;