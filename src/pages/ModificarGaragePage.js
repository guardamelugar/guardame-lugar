import React from 'react'
import SignupModGarage from '../components/SignupModGarage'

/* 
garage_data={garage_data}

Necesita garage_data para funcionar, que vendria desde el componente de garage --> MODIFICAR. La info es toda string:
i.e. 
return <SignupModGarage titulo="Modificar garage" type="UPDATE" garage_data={garage_data}/>

con garage_data:

const garage_data = {
  garage_id: "2",
  altura_maxima: "999",
  coordenadas: "999",
  telefono_garage: "55555555",
  direccion_garage: "San Pedrito 269",
  localidad_garage: "12",
  lugar_autos: "77",
  lugar_bicicletas: "78",
  lugar_camionetas: "79",
  lugar_motos: "80",
  nombre_garage: "Garage de prueba PUT",
} */

class ModificarGaragePage extends React.Component {
  render() {
    return <SignupModGarage titulo="Modificar garage" type="UPDATE" garage_data={this.props.garage_data}/>;
  }
}

export default ModificarGaragePage