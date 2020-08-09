import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoadingIndicator from '../Herramientas/LoadingIndicator'
import ComentarioContainer from './ComentarioContainer'
import GETComentariosbyGarage from '../DB Connection/GETComentariosbyGarage'

class MostrarComentarios extends Component {
  state = {
    ...this.state,
    comentarios: "",
    esReserva: undefined,
  }

  async componentDidMount() {
    let comentarios = undefined;

    if (this.props.comentario === undefined) {
      comentarios = await GETComentariosbyGarage(parseInt(this.props.garage_id, 10));
      this.setState({
        ...this.state,
        comentarios: comentarios,
        esReserva: false
      })
    }
    else {
      comentarios = this.props.comentario;
      this.setState({
        ...this.state,
        comentarios: comentarios,
        esReserva: true
      })
    }
  }

  render() {
    const comentarios = this.state.comentarios;
    return (
      <Container className="align-modal">
        <Row className="justify-content-center align-items-center">
          <Col className='fondito-comentarios fondito-modal-comentarios
         justify-self-center form-width' xs={12} sm={12}>
            <LoadingIndicator />
            <Col className="text-center nombreGarage mb-4">
              Comentarios para Garage {this.props.nombre_garage}
            </Col>
            {comentarios.length > 0 &&
              comentarios.map((comentario) => {
                return (<ComentarioContainer comentario={comentario} />)
              })
            }
            {comentarios.length === 0 &&
              <Col xs={12} className="text-center cuerpo-comentario align-self-center">
                No hay comentarios
            </Col>
            }
            {this.state.esReserva &&
              <Col xs={12} className="text-center cuerpo-comentario align-self-center">
                <ComentarioContainer comentario={comentarios} />
              </Col>
            }

          </Col>
        </Row>
      </Container>
    );
  }
}

export default MostrarComentarios;