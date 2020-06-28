import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Cookies from 'universal-cookie'
import { cookieName } from '../constants/Cookie'
import '../styles/Header.css'

class Header extends Component {

  clearUserCookies = (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    cookies.remove("guardameLugar|user");
    window.location.replace("/");
  }

  render(){
    //uso de cookie para mostrar link Ver reservas solo a usuarios
    const cookies = new Cookies();
    const cookie = cookies.get(cookieName);

    //chequeo de rol en la cookie para no mostrar header en login ni registrar
    const rol = cookie !== undefined ? cookie.rol : undefined;
    return (
      (rol !== undefined &&
      <header>
        <Navbar bg="secondary" expand="sm" className="padding-nav" variant="dark">
          <Navbar.Brand href="/">
            <img src={require("../img/logo.png")} className='header-logo' alt="logo"></img>
            Guardame Lugar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="no-margin-top navbar-toggler"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto right-align">
              <Nav.Link href="#profile">Ver Perfil</Nav.Link>
              {rol === 1 && <Nav.Link href="/reservas">Ver reservas</Nav.Link>}
              <Nav.Link href="#" onClick={this.clearUserCookies} >Cerrar sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
    )}
  }

export default Header