import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MissionStatement from './MissionStatement'
import '../styles/Forms.css';

const LoginContainer = () => {
  return (
    <Container fluid>
      <Row>
        <MissionStatement />
      </Row>
    </Container>
  );
}

export default LoginContainer;
