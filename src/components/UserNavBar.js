import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import '../styles/ClienteNavBar.css'


const UserNavBar = (props) => {
  return (
    <div className="cliente-navbar">
      <Container className="client-nav-wrapper">
        <Row>
          <Col>
            <Link to='/index'>
              <Button className="search-btn" variant="info">Buscar Garages</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserNavBar