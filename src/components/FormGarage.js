import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation'
import validator from 'validator'
import POSTSignup from './POSTSignup'
import TransformSignup from './TransformSignup'
import '../styles/Forms.css';

class SignupGarage extends Component {
  state = {
    ...this.state,
    formGarage: {
      nombre_garage: "",
      direccion: "",
      localidad_garage: "",
      telefono: "",
      lugar_autos: "",
      lugar_motos: "",
      lugar_camionetas: "",
      lugar_bicicletas: "",
      altura_maxima: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, "formGarage": { ...this.state.signup, [e.target.name]: e.target.value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const jsonForm = TransformSignup(this.state.signup);
    POSTSignup(jsonForm);

  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col className='fondito justify-self-center' md={11}>
            <img className='img-login-normal' alt="logo" src={require("../img/logo.png")} />
            <h2 className='pt-4'>{this.props.titulo}</h2>
            <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit} className="signupForm">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="nombre_garage">
                    <Form.Label>Nombre Garage</Form.Label>
                    <TextInput name="nombre_garage" id="nombre_garage" required
                      value={this.state.formGarage.nombre}
                      onChange={this.handleChange}
                      pattern="^[^±£%^&*§€#¢§¶•ªº«\\/<>|=]{3,40}$"
                      errorMessage={{
                        required: "El nombre del establecimiento es requerido",
                        pattern: "El nombre del establecimiento debe tener entre 3 y 40 caracteres"
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="direccion">
                    <Form.Label>Dirección</Form.Label>
                    <TextInput name="direccion" id="direccion" required
                      value={this.state.formGarage.direccion}
                      onChange={this.handleChange}
                      pattern="^[^±£%^&*§€#¢§¶•ªº«\\/<>|=]{3,40}$"
                      errorMessage={{
                        required: "La dirección es requerida",
                        pattern: "La dirección debe tener entre 3 y 40 caracteres"
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={12} controlId="localidad">
                    <Form.Label>Localidad</Form.Label>
                    <TextInput name="localidad" id="localidad" required
                      value={this.state.formGarage.localidad}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6} sm={12} controlId="telefono_garage">
                    <Form.Label>Teléfono</Form.Label>
                    <TextInput name="telefono_garage" id="telefono_garage" required
                      value={this.state.formGarage.telefono}
                      onChange={this.handleChange}
                      pattern="(?=^[0-9]*$).{5,15}"
                      errorMessage={{
                        required: "El campo es requerido",
                        pattern: "El campo sólo admite números"
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6} sm={12} controlId="lugar_autos">
                    <Form.Label>Lugares para autos</Form.Label>
                    <TextInput name="lugar_autos" id="lugar_autos" required
                      value={this.state.formGarage.lugar_autos}
                      onChange={this.handleChange}
                      pattern="(?=^[0-9]*$).{1,}"
                      errorMessage={{
                        required: "El campo es requerido",
                        pattern: "El campo sólo admite números"
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={12} controlId="lugar_camionetas">
                    <Form.Label>Lugares para camionetas</Form.Label>
                    <TextInput name="lugar_camionetas" id="lugar_camionetas" required
                      value={this.state.formGarage.lugar_camionetas}
                      onChange={this.handleChange}
                      pattern="(?=^[0-9]*$).{1,}"
                      errorMessage={{
                        required: "El campo es requerido",
                        pattern: "El campo sólo admite números"
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={12} controlId="lugar_motos">
                    <Form.Label>Lugares para motos</Form.Label>
                    <TextInput name="lugar_motos" id="lugar_motos" required
                      value={this.state.formGarage.lugar_motos}
                      onChange={this.handleChange}
                      pattern="(?=^[0-9]*$).{1,}"
                      errorMessage={{
                        required: "El campo es requerido",
                        pattern: "El campo sólo admite números"
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={12} controlId="lugar_bicicletas">
                    <Form.Label>Lugares para bicicletas</Form.Label>
                    <TextInput name="lugar_bicicletas" id="lugar_bicicletas" required
                      value={this.state.formGarage.lugar_bicicletas}
                      onChange={this.handleChange}
                      pattern="(?=^[0-9]*$).{1,}"
                      errorMessage={{
                        required: "El campo es requerido",
                        pattern: "El campo sólo admite números"
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} xs={12} controlId="altura_maxima">
                    <Form.Label>Altura máxima (cm)</Form.Label>
                    <TextInput name="altura_maxima" id="altura_maxima" required
                      value={this.state.formGarage.altura_maxima}
                      onChange={this.handleChange}
                      pattern="(?=^[0-9]*$).{1,}"
                      errorMessage={{
                        required: "La altura máxima es requerida",
                        pattern: "La altura máxima sólo admite números"
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <div className='text-center'>
                  <Button variant="primary" type="submit">
                    Guardar
                  </Button>
                </div>
              </Form>
            </ValidationForm>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default SignupGarage;