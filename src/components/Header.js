import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/Header.css'

const Footer = () => {
  return (
    <header>
      <Container fluid>
        <Row className='header-container'>
          <img alt="logo" className='header-logo' src={require("../img/logo.png")} />
          <Col className='text-right nav-col'>
            <ul class="header-nav">
                <li class="header-nav-item">
                <div class="search">
                      <input type="text" class="searchTerm" placeholder="Buscar"/>
                      <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                  </div>
                </li>
                <li class="header-nav-item">
                  <i class="fas fa-user-circle nav-icon"></i>
                  <a href="/profile">Perfil</a>
                </li>
                <li class="header-nav-item">
                <i class="fas fa-sign-out-alt nav-icon"></i>
                  <a href="/login">Cerrar Sesión</a>
                </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  )

}

export default Footer