import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const SignupOptions = () => {
  return (
    /* la idea seria poder manejar registro por cliente o usuario con cards elegantes*/
    <Col className='signupRedirect'>
      <Col xs={12}>
        ¿Todavía no tenés cuenta? <Link to='/signup'>Registrate</Link>
      </Col>
      <Col xs={12}>
        ¿No recordás tu contraseña? <Link to='/passwordReset'>Reseteala</Link>
      </Col>
    </Col>
  );
}

export default SignupOptions;
