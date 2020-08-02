import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CalificacionesContainer from './CalificacionesContainer'
import POSTComentario from './DB Connection/POSTComentario'

class CrearComentario extends React.Component {

  state = {
    ...this.state,
    comentario: "",
    calificacion_1: 0,
    calificacion_2: 0,
    calificacion_3: 0,
    calificacion_media: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const jsonForm = {
      reserva_id: this.props.reserva_id,
      comentario: this.state.comentario,
      calificacion_1: this.state.calificacion_1,
      calificacion_2: this.state.calificacion_2,
      calificacion_3: this.state.calificacion_3,
      calificacion_media: this.state.calificacion_media
    }

    if (this.state.calificacion_1 === 0 || this.state.calificacion_2 === 0 || this.state.calificacion_3 === 0) {
      alert("La calificación no puede ser 0 estrellas. Por favor revisá los campos.")
    }
    else {
      POSTComentario(jsonForm);
    }
  }

  onChangeCal1 = (value) => {
    this.setState({
      ...this.state, "calificacion_1": value,
      "calificacion_media": parseFloat(((value + this.state.calificacion_2 + this.state.calificacion_3) / 3).toFixed(2))
    })
  }

  onChangeCal2 = (value) => {
    this.setState({
      ...this.state, "calificacion_2": value,
      "calificacion_media": parseFloat(((this.state.calificacion_1 + value + this.state.calificacion_3) / 3).toFixed(2))
    })
  }

  onChangeCal3 = (value) => {
    this.setState({
      ...this.state, "calificacion_3": value,
      "calificacion_media": parseFloat(((this.state.calificacion_1 + this.state.calificacion_2 + value) / 3).toFixed(2))
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, comentario: e.target.value
    })
  }

  render() {
    return (
      <Container className="align-modal mt-2">
        <Row className="justify-content-center align-items-center">
          <Col className='fondito fondito-modal form-width rounded' xl={6} lg={7} md={8} sm={9}>
            <section className="text-left nombreGarage">Reseña para {this.props.nombre_garage}</section>
            <hr />

            <Form onSubmit={this.handleSubmit}>
              <Form.Row className="text-left justify-content-center">
                <Form.Group as={Col} xs={12} controlId="tipo_vehiculo">
                  <CalificacionesContainer
                    bubbleChangeCal1={this.onChangeCal1}
                    bubbleChangeCal2={this.onChangeCal2}
                    bubbleChangeCal3={this.onChangeCal3}
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} controlId="comentarioTextArea">
                  <Form.Label className="header-comentario">Comentario</Form.Label>
                  <Form.Control as="textarea" rows="3" maxlength="140"
                    value={this.state.comentario}
                    onChange={this.handleChange}
                    required />
                </Form.Group>
              </Form.Row>
              <Button variant="danger" onClick={this.props.handleClose} className="mr-2">
                Cancelar
                  </Button>
              <Button variant="primary" type="submit">
                Enviar reseña
                  </Button>
            </Form>

          </Col>
        </Row>
      </Container >
    )
  }
}

export default CrearComentario