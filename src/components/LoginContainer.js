import React from 'react';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
