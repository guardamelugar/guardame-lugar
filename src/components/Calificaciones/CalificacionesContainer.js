import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Estrellas from './Estrellas'

class CalificacionesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calificacion_1: 0,
      calificacion_2: 0,
      calificacion_3: 0,
      calificacion_media: 0,
    }
  }
  
/* cuando cambia una de las calificaciones se calcula la media */
  onChangeCal1 = (value) => {
    this.setState({
      ...this.state, "calificacion_1": value,
      "calificacion_media": parseFloat(((value + this.state.calificacion_2 + this.state.calificacion_3) / 3).toFixed(2))
    })
    this.props.bubbleChangeCal1(value);
  }

  onChangeCal2 = (value) => {
    this.setState({
      ...this.state, "calificacion_2": value,
      "calificacion_media": parseFloat(((this.state.calificacion_1 + value + this.state.calificacion_3) / 3).toFixed(2))
    })
    this.props.bubbleChangeCal2(value);
  }

  onChangeCal3 = (value) => {
    this.setState({
      ...this.state, "calificacion_3": value,
      "calificacion_media": parseFloat(((this.state.calificacion_1 + this.state.calificacion_2 + value) / 3).toFixed(2))
    })
    this.props.bubbleChangeCal3(value);
  }


  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <div className="header-comentario">Calificaciones</div>
          </Col>
          <Col xs={4}>
            Atención
          </Col>
          <Col xs={8}>
            <Estrellas onChangeCal={this.onChangeCal1} />
          </Col>
          <Col xs={4}>
            Higiene
          </Col>
          <Col xs={8}>
            <Estrellas onChangeCal={this.onChangeCal2} />
          </Col>
          <Col xs={4}>
            Precio
          </Col>
          <Col xs={8}>
            <Estrellas onChangeCal={this.onChangeCal3} />
          </Col>
        </Row>
      </>
    )
  }

}

export default CalificacionesContainer