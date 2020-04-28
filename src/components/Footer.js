import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RedesSociales from './RSociales'
import '../styles/Forms.css'

const Footer = () => {
  return (
    <footer >
      <Container fluid>
        <Row className='align-items-center pt-2'>
          <Col className='text-footer text-muted ml-2' xs={4}>
            Cocineritos design - 2020
        </Col>
          <Col className='text-right mr-2' xs={7}>
            <RedesSociales />
          </Col>
        </Row>
      </Container>
    </footer>
  )

}

export default Footer