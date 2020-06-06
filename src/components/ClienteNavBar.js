import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import '../styles/ClienteNavBar.css'
import { Link } from 'react-router-dom'

class ClienteNavBar extends Component {
  
  render() {
    return (
      <div className="cliente-navbar">
        <Container className="client-nav-wrapper">
          <Link to='/agregargarage'>
            <Button variant="info" id="agregar-garage" type="submit" className="search-btn" >
                Agregar Garage
            </Button>
          </Link>
        </Container>
      </div>
    )
  }
  
}

export default ClienteNavBar