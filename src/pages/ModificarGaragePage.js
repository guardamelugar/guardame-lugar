import React from 'react'
import SignupModGarage from '../components/SignupModGarage'

/* 
garage_id={this.props.garage_id}

Necesita una cookie activa (chequeada por TransformGarage.js) y garage_id para funcionar, que vendria desde el 
componente de garage --> MODIFICAR. Se envia tambien handleClose para cerrar el modal:
i.e. 
return <SignupModGarage titulo="Modificar garage" type="UPDATE" garage_id={this.props.garage_id} handleClose={this.props.handleClose}/>

const garage_id = "2",
} */

class ModificarGaragePage extends React.Component {
  render() {
    return <SignupModGarage titulo="Modificar garage" type="UPDATE" garage_id={this.props.garage_id} handleClose={this.props.handleClose}/>;
  }
}

export default ModificarGaragePage