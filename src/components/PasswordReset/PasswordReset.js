import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation'
import validator from 'validator'
import POSTPasswordReset from '../DB Connection/POSTPasswordReset'
import PATCHCambiarPassword from '../DB Connection/PATCHCambiarPassword'
import GETValidarToken from '../DB Connection/GETValidarToken'

class PasswordReset extends Component {
  state = {
    ...this.state,
    user_id: "",
    form_data: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    display_pagina: "ingresar_mail",
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, "form_data": { ...this.state.form_data, [e.target.name]: e.target.value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.display_pagina === "ingresar_mail") {
      const data = { mail: this.state.form_data.email, link: window.location.origin + window.location.pathname }
      POSTPasswordReset(data);
    }
    else {
      const data = { user_id: this.state.user_id, password: this.state.form_data.password }
      PATCHCambiarPassword(data);
    }
  }

  matchPassword = (value) => {
    return value && value === this.state.form_data.password;
  }

  async componentDidMount() {
    /* busca la URL usada para ser enviada al backend */
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');

    if (token !== null) {
      const return_data = await GETValidarToken(token);
      console.log("GETVALIDAR", return_data);
      if (return_data !== undefined) {
        this.setState({...this.state, 
          user_id: return_data.user_id,form_data: {...this.state.form_data, email: return_data.mail}})
      }

      this.setState({ ...this.state, display_pagina: "ingresar_password" })
    }
  }


  render() {
    return (
      <Container fluid className="my-auto">
        <Row className="justify-content-center align-items-center">
          <Col className='fondito justify-self-center' xl={7} lg={8} md={9} sm={10}>
            <img className='img-login-normal' alt="logo" src={require("../../img/guardamelugar-iso.png")} />
            <img className='img-login-mobile' alt="logo" src={require("../../img/guardamelugar-iso.png")} />
            {this.state.display_pagina === "ingresar_mail" && <h2 className='pt-4'>Resetear contraseña</h2>}
            {this.state.display_pagina === "ingresar_password" && <h2 className='pt-4'>Cambiar contraseña</h2>}

            {/* a ser mostrado si el usuario quiere pedir el resteo --> token inexistente en URL */}
            {this.state.display_pagina === "ingresar_mail" &&
              <ValidationForm onSubmit={this.handleSubmit} className="signupForm">
                <Form>
                  <Form.Row className="justify-content-center">
                    <Form.Group as={Col} xs={12} md={9} controlId="email">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <TextInput name="email" id="email" type="email" required
                        validator={validator.isEmail}
                        errorMessage={{ validator: "Ingresar un email válido" }}
                        value={this.state.form_data.email}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Row className='justify-content-center'>
                    <Col xs={12} md={4}>
                      <Link to='/'>
                        <Button className="btn btn-block" variant="danger">
                          Cancelar
                    </Button>
                      </Link>
                    </Col>
                    <Col xs={12} md={4}>
                      <Button className="btn btn-block" variant="primary" type="submit">
                        Resetear contraseña
                  </Button>
                    </Col>
                  </Row>
                </Form>
              </ValidationForm>}
            {/* ------------------------------------------------------------------------------------------------- */}
            {/* a ser mostrado si el usuario usa el link enviado por mail --> token en URL */}
            {this.state.display_pagina === "ingresar_password" &&
              <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit} className="signupForm">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} md={6} sm={12} controlId="password">
                      <Form.Label>Password</Form.Label>
                      <TextInput name="password" id="password" type="password" required
                        pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,15}"
                        errorMessage={{
                          required: "El password es requerido",
                          pattern: "El password necesita entre 8 caracteres, conteniendo mayúsculas, minúsculas, y números"
                        }}
                        value={this.state.form_data.password}
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
                        value={this.state.form_data.confirmPassword}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Row className='justify-content-center'>
                    <Col xs={12} md={4}>
                      <Link to='/'>
                        <Button className="btn btn-block" variant="danger">
                          Cancelar
                    </Button>
                      </Link>
                    </Col>
                    <Col xs={12} md={4}>
                      <Button className="btn btn-block" variant="primary" type="submit">
                        Actualizar contraseña
                  </Button>
                    </Col>
                  </Row>
                </Form>
              </ValidationForm>}
            {/* ------------------------------------------------------------------------------------------------- */}
          </Col>
        </Row>
      </Container >
    );
  }
}

export default PasswordReset;