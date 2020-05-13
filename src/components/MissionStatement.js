import React from 'react'
import Login from './Login'
import SignupOptions from './SignupOptions'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MissionStatement = () => {
  return (
    <Container className='fondito'>
      <img alt="logo" className='img-login-normal' src={require("../img/logo.png")} />
      <Row className="missionNormal align-items-center">
        <Col md={5}>
          <Login />
          <SignupOptions />
        </Col>
        <Col className='mision'>
          <h2 className='guardameLugar tituloMision'>GUARDAME LUGAR</h2>
          <p>La página que te facilita reservar un lugar para tu vehículo. </p>
          <p>Creando rápidamente una cuenta como usuario, ¡podrás reservar tu lugar en el garage que te quede más cómodo!</p>
          <p>Si tenés uno o mas garages y querés ser parte de <b className='guardameLugar'>GUARDAME LUGAR</b>,
            creando una cuenta como cliente podrás publicar tus establecimientos, limitar la cantidad de lugares para reservar
            e informar sobre los tipos de vehículos que aceptás. </p>
          <p>Olvidate de dar vueltas buscando donde estacionar, llegar tarde a una reunión, o si se aproxima una tormenta.</p>
          <p>Registrate y empezá a formar parte de nuestra comunidad. </p>
          <br />
          <p><b>Vos preocupate por manejar, nosotros nos encargamos del resto.</b></p>
        </Col>
      </Row>
      <Row className="missionSmall">
        <Col className='mision'>
          <h2 className='guardameLugar tituloMision'>GUARDAME LUGAR</h2>
          <p>La página que te facilita reservar un lugar para tu vehículo. </p>
          <p>Creando rápidamente una cuenta como usuario, ¡podrás reservar tu lugar en el garage que te quede más cómodo!</p>
          <p>Si tenés uno o mas garages y querés ser parte de <b className='guardameLugar'>GUARDAME LUGAR</b>,
            creando una cuenta como cliente podrás publicar tus establecimientos, limitar la cantidad de lugares para reservar
            e informar sobre los tipos de vehículos que aceptás. </p>
          <p>Olvidate de dar vueltas buscando donde estacionar, llegar tarde a una reunión, o si se aproxima una tormenta.</p>
          <p>Registrate y empezá a formar parte de nuestra comunidad. </p>
          <br />
          <p><b>Vos preocupate por manejar, nosotros nos encargamos del resto.</b></p>
        </Col>
        <Col>
          <Login />
          <SignupOptions />
        </Col>
      </Row>
    </Container>
  )
}

export default MissionStatement