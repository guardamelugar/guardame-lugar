import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
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
        <Button className="search-btn" variant="info" onClick={() => setShow(true)}>Agregar Garage</Button>
        {window.location.pathname !== '/clientindex' &&
          <Link to='/clientindex'>
            <Button className="search-btn" variant="info">Ver Garages</Button>
          </Link>}
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