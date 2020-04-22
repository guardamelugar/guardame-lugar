import React from 'react';
import '../styles/NotFound.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotFound = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col className="notFoundBox justify-self-center" >
          <h1 className="notFound">No se encontró la dirección solicitada</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound