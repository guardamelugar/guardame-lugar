import React, { Component } from 'react'
import GarageSearch from '../NavBars/GarageSearch'
import GaragesContainer from './GaragesContainer'
import '../../styles/GarageSearch.css'


class UserContainer extends Component {
  
  constructor(props) {
    super(props);
    this.handleVehicleChange = this.handleVehicleChange.bind(this);
    this.handleLocalidadChange = this.handleLocalidadChange.bind(this);
    this.state = {
      filtered: "",
      vehicle_type: "",
      localidad: "",
    }
  }

  /* uso de estado para refrescar el filtro de garages */
  handleVehicleChange(vehicle)  {
    this.setState({vehicle_type: vehicle, filtered: "filtrado"})
  }

  /* uso de estado para refrescar el filtro de garages */
  handleLocalidadChange(localidad) {
    this.setState({localidad: localidad, filtered: "filtrado"})
  }

  render() {
    
    return (
      <>
      <GarageSearch 
        onLocalidadChange={this.handleLocalidadChange}
        onVehicleChange={this.handleVehicleChange}
      />
      <GaragesContainer
        filtered={this.state.filtered}
        localidad={this.state.localidad}
        vehicle_type={this.state.vehicle_type}
      />
      </>
    )
  }

}
export default UserContainer