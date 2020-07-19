import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import '../styles/ClienteNavBar.css'
import AgregarGaragePage from '../pages/AgregarGaragePage';


const ClienteNavBar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div className="cliente-navbar">
      <Container className="client-nav-wrapper">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} xl={2} className="text-center">
            <Button className="client-btn btn-block" variant="info" onClick={() => setShow(true)}>Agregar Garage</Button>
          </Col>
          {window.location.pathname !== '/clientindex' && <Col xs={12} sm={6} md={4} lg={3} xl={2} className="text-center">
            <Link to='/clientindex'>
              <Button className="client-btn btn-block" variant="info">Ver Garages</Button>
            </Link>
          </Col>}
        </Row>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="main-modal"
        >
          <AgregarGaragePage handleClose={handleClose} />
        </Modal>
      </Container>
    </div>
  )
}



export default ClienteNavBar