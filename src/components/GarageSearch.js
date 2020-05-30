import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ListadoLocalidades from './ListadoLocalidades'
import '../styles/GarageSearch.css'


class GarageSearch extends Component {

  render() {
    return (
      <div className="searchBar">
        <Container className="form-container">
          <Form inline>
            <Form.Row>
              <Form.Group controlId="busquedaForm.Region">
                <Form.Label className="d-none d-md-block">Seleccione Localidad: </Form.Label>
                <Form.Control size="sm" as="select">
                  <ListadoLocalidades></ListadoLocalidades>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="busquedaForm.VehicleType">
                <Form.Label className="d-none d-md-block">Tipo de Vehículo:</Form.Label>
                <Form.Control size="sm" as="select">
                  <option>Elija tipo de Vehiculo</option>
                  <option>Autos</option>
                  <option>Motos</option>
                  <option>Camionetas</option>
                  <option>Bicicletas</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="busquedaForm.submit">
                <Button variant="info" type="submit" className="search-btn">
                  Buscar
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        </Container>
      </div>
    )
  }

}

export default GarageSearch