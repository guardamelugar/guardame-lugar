import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import '../styles/ClienteNavBar.css'


const UserNavBar = (props) => {
  return (
    <div className="cliente-navbar">
      <Container className="client-nav-wrapper">
        <Link to='/clientindex'>
          <Button className="search-btn" variant="info">Buscar Garages</Button>
        </Link>
      </Container>
    </div>
  )
}

export default UserNavBar