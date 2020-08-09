import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import POSTReserva from '../DB Connection/POSTReserva'
import RecuperarCookie from '../Cookie/RecuperarCookie'
import { TransformFormReserva } from '../Transform/TransformReservaData'
import { ValidationForm, SelectGroup } from 'react-bootstrap4-form-validation'


class GuardameLugar extends React.Component {
  cookie = RecuperarCookie();
  user_id = this.cookie.user_id;

  state = {
    ...this.state,
    reservaform: {
      tipo_vehiculo: "",
/*       fecha_reserva: "",
      hora_reserva: "", */
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, "reservaform": { ...this.state.reservaform, [e.target.name]: e.target.value }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const jsonForm = {
      "user_id": this.user_id,
      "garage_id": this.props.garage_id,
      "tipo_vehiculo": this.state.reservaform.tipo_vehiculo,
/*       "fecha_reserva": this.state.reservaform.fecha_reserva,
      "hora_reserva": this.state.reservaform.hora_reserva, */
    }

    POSTReserva(TransformFormReserva(jsonForm));

  }

  render() {
    return (
      <Container className="align-modal mt-5">
        <Row className="justify-content-center align-items-center">
          <Col className='fondito fondito-modal form-width rounded' xl={6} lg={7} md={8} sm={9}>
            <section className="text-left nombreGarage">Reservando en {this.props.nombre_garage}</section>
            <hr />
            <ValidationForm onSubmit={this.handleSubmit} className="reservaform">
              <Form>
                <Form.Row className="text-left justify-content-center">
                  <Form.Group as={Col} md={8} controlId="tipo_vehiculo">
                    <Form.Label >Vehículo</Form.Label>
                    <SelectGroup name="tipo_vehiculo" id="tipo_vehiculo"
                      value={this.state.reservaform.tipo_vehiculo}
                      required errorMessage="Por favor elija el tipo de vehiculo"
                      onChange={this.handleChange}>
                      <option value="">Elija el tipo de vehículo...</option>
                      <option value="lugar_autos">Auto</option>
                      <option value="lugar_camionetas">Camioneta</option>
                      <option value="lugar_motos">Moto</option>
                      <option value="lugar_bicicletas">Bicicletas</option>
                    </SelectGroup>
                  </Form.Group>
                </Form.Row>
{/*                 <Form.Row className="text-left justify-content-center">
                  <Form.Group as={Col} md={8} controlId="fecha_reserva">
                    <Form.Label>Elija el día</Form.Label>
                    <TextInput name="fecha_reserva" id="fecha_reserva"
                      required value={this.state.reservaform.fecha_reserva}
                      onChange={this.handleChange}
                      type="date"
                      errorMessage={{
                        required: "Por favor elegí una fecha",
                      }}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="text-left justify-content-center">
                  <Form.Group as={Col} md={8} controlId="hora_reserva">
                    <Form.Label>Elija la hora</Form.Label>
                    <TextInput name="hora_reserva" id="hora_reserva"
                      required value={this.state.reservaform.hora_reserva}
                      onChange={this.handleChange}
                      type="time"
                      errorMessage={{
                        required: "Por favor elegí una hora",
                      }}
                    />
                  </Form.Group>
                </Form.Row> */}
                <Button variant="danger" onClick={this.props.handleClose} className="mr-2">
                  Cancelar
                  </Button>
                <Button variant="primary" type="submit">
                  Reservar
                  </Button>
              </Form>
            </ValidationForm>
          </Col>
        </Row>
      </Container >
    )
  }
}


export default GuardameLugar