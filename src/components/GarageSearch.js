import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ListadoLocalidades from './ListadoLocalidades'
import '../styles/GarageSearch.css'

class GarageSearch extends Component {

  constructor(props){
    super(props);
    this.handleLocalidadChange = this.handleLocalidadChange.bind(this);
    this.handleVehicleChange = this.handleVehicleChange.bind(this);
  }
  
  handleLocalidadChange(e) {
    this.props.onLocalidadChange(e.target.value);
  }
  
  handleVehicleChange(e) {
    this.props.onVehicleChange(e.target.value);
  }


  render() {
    
    return (
      <div className="searchBar">
        <Container className="form-container-search">
          <Form onSubmit={this.handleSubmit} inline>
            <Form.Row className="form-row-search">
              <Form.Group controlId="busquedaForm.Region" className="form-group-search">
                <Form.Label className="d-none d-md-block label-search">Seleccione Localidad: </Form.Label>
                <Form.Control size="sm" as="select" onChange={this.handleLocalidadChange}>
                  <ListadoLocalidades></ListadoLocalidades>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="busquedaForm.VehicleType" className="form-group-search">
                <Form.Label className="d-none d-md-block label-search">Tipo de Vehículo:</Form.Label>
                <Form.Control size="sm" as="select" onChange={this.handleVehicleChange}>
                  <option>Elija tipo de Vehiculo</option>
                  <option value="autos">Autos</option>
                  <option value="motos">Motos</option>
                  <option value="camionetas">Camionetas</option>
                  <option value="bicicletas">Bicicletas</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
        </Container>
      </div>
    )
  }

}
export default GarageSearch