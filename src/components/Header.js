import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Cookies from 'universal-cookie'
import '../styles/Header.css'

class Header extends Component {

  clearUserCookies = (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    cookies.remove("guardameLugar|user");
    window.location.replace("/");
  }

  render(){
    return (
      <header>
        <Navbar bg="secondary" expand="sm" className="padding-nav" variant="dark">
          <Navbar.Brand href="/">
            <img src={require("../img/logo.png")} className='header-logo' alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="no-margin-top navbar-toggler"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto right-align">
              <Nav.Link href="#profile">Ver Perfil</Nav.Link>
              <Nav.Link href="#" onClick={this.clearUserCookies} >Cerrar sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )}
  }

export default Header