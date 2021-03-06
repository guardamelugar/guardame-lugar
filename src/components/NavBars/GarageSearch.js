import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import ListadoLocalidades from '../Localidades/ListadoLocalidades'
import '../../styles/GarageSearch.css'

class GarageSearch extends Component {

  constructor(props){
    super(props);
    this.handleLocalidadChange = this.handleLocalidadChange.bind(this);
    this.handleVehicleChange = this.handleVehicleChange.bind(this);
  }
  
  /* esta informacion se eleva a UserContainer para actualizar los garages mostrados */
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
          <Form inline>
            <Form.Row className="form-row-search">
              <Form.Group controlId="busquedaForm.Region" className="form-group-search">
                <Form.Label className="d-none d-md-block label-search">Seleccione Localidad: </Form.Label>
                <Form.Control size="sm" as="select" onChange={this.handleLocalidadChange}>
                  <ListadoLocalidades filtrado={true}></ListadoLocalidades>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="busquedaForm.VehicleType" className="form-group-search">
                <Form.Label className="d-none d-md-block label-search">Tipo de Vehículo:</Form.Label>
                <Form.Control size="sm" as="select" onChange={this.handleVehicleChange}>
                  <option value="">Elija tipo de Vehiculo</option>
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