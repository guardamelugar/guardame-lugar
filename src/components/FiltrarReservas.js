import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const FiltrarReservas = (props) => {
  return (<Container>
    <Row className="text-center">
      <Col xs={12} sm={6}>
        <button className="btn btn-lg btn-outline-light btn-block btn-reserva"
          onClick={() => props.changeReservasActivas("activas")}>RESERVAS ACTIVAS</button>
      </Col>
      <Col xs={12} sm={6}>
        <button className="btn btn-lg btn-outline-light btn-block btn-reserva"
          onClick={() => props.changeReservasActivas("inactivas")}>RESERVAS INACTIVAS</button>
      </Col>
    </Row>
  </Container>)
}

export default FiltrarReservas