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
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} xl={2} className="text-center">
            <Link to='/index'>
              <Button className="btn btn-primary btn-block" variant="info">Buscar Garages</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserNavBar