import React from 'react'
import SignupModGarage from '../components/ContainersPaginas/SignupModGarage'

class AgregarGaragePage extends React.Component {
  render() {
    
    return (
        <SignupModGarage titulo="Agregar garage" type="INSERT" handleClose={this.props.handleClose}/>
    )
  }
}

export default AgregarGaragePage