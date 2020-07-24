import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ComentarioContainer = (props) => {

  /*   {
      comentario_id: 3,
      reserva_id: 8,
      comentario: "ALGO 2",
      calificacion_1: 4,
      calificacion_2: 4,
      calificacion_3: 4,
      calificacion_media: 4,
      nombre: "Testing"
    } */


  return (
    <Row className="justify-content-center align-items-center">
      <Col className='' xl={11} lg={11} md={11} sm={11}>
        <Row className="justify-content-around">
          <Col xs={4}>
            <Col xs={12} className="text-left titulo-comentario">{props.comentario.nombre}</Col>
            <Col xs={12} className="text-left titulo-comentario">
              <i className="fa fa-star estrella-garage" />{' ' + props.comentario.calificacion_media}
            </Col>
          </Col>
          <Col xs={8} className="justify-content-around">
            <Col xs={12} className="text-left cuerpo-comentario">
              {props.comentario.comentario}
            </Col>
          </Col>
        </Row>
        <hr />

      </Col>
    </Row>
  )
}


export default ComentarioContainer