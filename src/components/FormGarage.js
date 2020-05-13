import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { ValidationForm, TextInput, SelectGroup } from 'react-bootstrap4-form-validation'
import ListadoLocalidades from './ListadoLocalidades'
import POSTGarage from './DB Connection/POSTGarage'
import PATCHGarage from './DB Connection/PATCHGarage'
import TransformGarage from './Transform/TransformGarage'
import { Link } from 'react-router-dom'

class SignupGarage extends Component {
  state = {
    ...this.state,
    formGarage: {
      altura_maxima: "",
      coordenadas: "",
      telefono_garage: "",
      direccion_garage: "",
      localidad_garage: "",
      lugar_autos: "",
      lugar_bicicletas: "",
      lugar_camionetas: "",
      lugar_motos: "",
      nombre_garage: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, "formGarage": { ...this.state.formGarage, [e.target.name]: e.target.value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const jsonForm = TransformGarage(this.state.formGarage);
    if (this.props.type === "TYPE") {
      POSTGarage(jsonForm)
    }
    else {
      PATCHGarage(jsonForm)
    }
  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col className='fondito justify-self-center form-width' xl={7} lg={8} md={9} sm={10}>
            <img className='img-login-normal' alt="logo" src={require("../img/logo.png")} />
            <h2 className='pt-4'>{this.props.titulo}</h2>
            <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit} className="signupForm">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} md={6} controlId="nombre_garage">
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
                  <Form.Group as={Col} controlId="direccion_garage">
                    <Form.Label>Dirección</Form.Label>
                    <TextInput name="direccion_garage" id="direccion_garage" required
                      value={this.state.formGarage.direccion_garage}
                      onChange={this.handleChange}
                      pattern="^[^±£%^&*§€#¢§¶•ªº«\\/<>|=]{3,40}$"
                      errorMessage={{
                        required: "La dirección es requerida",
                        pattern: "La dirección debe tener entre 3 y 40 caracteres"
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>

                  <Form.Group as={Col} md={6} sm={12} controlId="localidad_garage"
                    value={this.state.formGarage.localidad_garage}>
                    <Form.Label>Localidad</Form.Label>
                    <SelectGroup name="localidad_garage" id="localidad_garage"
                      value={this.state.localidad_garage}
                      required errorMessage="Por favor elija una localidad"
                      onChange={this.handleChange}>
                      <ListadoLocalidades />
                    </SelectGroup>

                  </Form.Group>

                  <Form.Group as={Col} md={6} sm={12} controlId="telefono_garage">
                    <Form.Label>Teléfono</Form.Label>
                    <TextInput name="telefono_garage" id="telefono_garage" required
                      value={this.state.formGarage.telefono_garage}
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
                  <Col xs={12}>
                    <legend className="legendGarage">Lugares</legend></Col>
                  <Form.Group as={Col} sm={3} xs={6} controlId="lugar_autos">
                    <Form.Label>Autos</Form.Label>
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
                  <Form.Group as={Col} sm={3} xs={6} controlId="lugar_camionetas">
                    <Form.Label>Camionetas</Form.Label>
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
                  <Form.Group as={Col} sm={3} xs={6} controlId="lugar_motos">
                    <Form.Label>Motos</Form.Label>
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
                  <Form.Group as={Col} sm={3} xs={6} controlId="lugar_bicicletas">
                    <Form.Label>Bicicletas</Form.Label>
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
                </Form.Row>
                <Form.Row className='mt-2'>
                  <Form.Group as={Col} md={3} xs={6} controlId="altura_maxima">
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
                <div className='mt-2 text-center'>
                  <Link to='/indexcliente'>
                    <Button variant="danger">
                      Cancelar
                    </Button>
                  </Link>
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