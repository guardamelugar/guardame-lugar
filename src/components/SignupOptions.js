import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SignupOptions = () => {
  return (
    /* la idea seria poder manejar registro por cliente o usuario con cards elegantes*/
    <Col className='signupRedirect'>
      <Col xs={12}>
        ¿Todavía no tenés cuenta? ¡Registrate!
      </Col>
      <Link to='/signup'><Button>Registrate</Button></Link>
    </Col>
  );
}

export default SignupOptions;
