import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import MissionStatement from './MissionStatement'
import ChequearCookie from './ChequearCookie'

const LoginContainer = () => {
  const salida =
    <Container fluid>
      <Row>
        <MissionStatement />
      </Row>
    </Container>;

  return (ChequearCookie(salida, '/index', '/clientindex'));

}

export default LoginContainer;
