import React from 'react';
import Login from './Login';
import SignupOptions from './SignupOptions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MissionStatement = () => {
  return (
    <Container className='fondito'>
      <img className='img-login' src={require("../img/logo.png")} />
      <Row className="missionNormal align-items-center">
        <Col md={5}>
          <Login />
          <SignupOptions />
        </Col>
        <Col className='mision'>
          <h2 className='guardameLugar tituloMision'>GUARDAME LUGAR</h2>
          <p>La página que te facilita reservar un lugar para tu vehículo. <br />
            Creando rápidamente una cuenta como usuario podrás reservar tu lugar en el garage que te quede más cómodo, también podés comparar precios entre los garages más cercano y elegír el día  y la hora de tu reserva.<br />
            Si tenes uno o mas garages y queres ser parte de <b className='guardameLugar'>GUARDAME LUGAR</b>, creando una cuenta como cliente podrás publicar tus establecimientos, limitar la cantidad de lugares para reservar e informar sobre los tipos de vehículos que aceptas. <br />
            Olvidate de dar vueltas buscando donde estacionar, llegar tarde a una reunión o si se aproxima una tormenta.<br />
            Registrate y empezá a formar parte de la comunidad más grande de Argentina. <br />
            <br />
            <b>Vos preocupate por manejar, nosotros nos encargamos del resto.</b>
          </p>
        </Col>
      </Row>
      <Row className="missionSmall">
      <Col className='mision'>
          <h1 className='guardameLugar tituloMision'>Guardame Lugar</h1>
          <p>La página que te facilita reservar un lugar para tu vehículo. <br />
            Creando rápidamente una cuenta como usuario podrás reservar tu lugar en el garage que te quede más cómodo, también podés comparar precios entre los garages más cercano y elegír el día  y la hora de tu reserva.<br />
            Si tenes uno o mas garages y queres ser parte de <b>guardame lugar</b>, creando una cuenta como cliente podrás publicar tus establecimientos, limitar la cantidad de lugares para reservar e informar sobre los tipos de vehículos que aceptas. <br />
            Olvidate de dar vueltas buscando donde estacionar, llegar tarde a una reunión o si se aproxima una tormenta.<br />
            Registrate y empezá a formar parte de la comunidad más grande de Argentina. <br />
            <br />
            <b>Vos preocupate por manejar, nosotros nos encargamos del resto.</b>
          </p>
        </Col>
        <Col md={4}>
          <Login />
          <SignupOptions />
        </Col>
      </Row>
    </Container>
  )
}

export default MissionStatement