import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/socialmedia.css'

const RedesSociales = () => {
  return (
    <>
    <Row className="redes_sociales">
      <Col className="mr-2 text-muted">
        Seguinos en nuestras redes:
      </Col>
    </Row>
    <Row className="redes_sociales">
      <Col>
        <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"
          class="btn-social btn-facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"
          class="btn-social btn-instagram"><i className="fab fa-instagram"></i></a>
        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"
          class="btn-social btn-twitter"><i className="fab fa-twitter"></i></a>
      </Col>
    </Row>
    </>
  )
}

export default RedesSociales