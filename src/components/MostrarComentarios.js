import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoadingIndicator from './LoadingIndicator'
import ComentarioContainer from './ComentarioContainer'

class MostrarComentarios extends Component {
  state = {
    ...this.state,
    comentarios: "",
  }

  async componentDidMount() {
    let comentarios = undefined;

    /*     if (this.props.mostrar_lista) {
          comentarios = await GETComentariosbyGarage(parseInt(this.props.garage_id, 10));
        }
        else {
          comentarios = await GETComentariosbyReserva(parseInt(this.props.reserva_id, 10));
        } */

    this.setState({
      ...this.state,
      comentarios: comentarios,
    })
  }

  render() {
    /* const comentarios = this.state.comentarios; */

    const comentarios = [{
      comentario_id: 3,
      reserva_id: 8,
      comentario: "El garage muy bueno. La atención excelente!!!",
      calificacion_1: 5,
      calificacion_2: 5,
      calificacion_3: 5,
      calificacion_media: 5,
      nombre: "Gabriel"
    },
    {
      comentario_id: 3,
      reserva_id: 8,
      comentario: "La limipieza no es la mejor pero el resto muy bien. El precio podría ser un poco más acorde al servicio.",
      calificacion_1: 4,
      calificacion_2: 4,
      calificacion_3: 4,
      calificacion_media: 4,
      nombre: "Testing"
    }]

    return (
      <Container className="align-modal">
        <Row className="justify-content-center align-items-center">
          <Col className='fondito-comentarios fondito-modal-comentarios
         justify-self-center form-width' xs={12} sm={12}>
            <LoadingIndicator />
            <Col className="text-center nombreGarage mb-4">
            Comentarios para Garage {this.props.nombre_garage}
            </Col>
            {
              comentarios.map((comentario) => {
                return (<ComentarioContainer comentario={comentario} />)
              })
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MostrarComentarios;