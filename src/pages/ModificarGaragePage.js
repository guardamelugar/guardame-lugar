import React from 'react'
import Header from '../components/Header'
import SignupModGarage from '../components/SignupModGarage'

    
/* 
Necesita garage_data para funcionar, que vendria desde el componente de garage. La info es toda string:
i.e. 
const garage_data = {
  altura_maxima: "200",
  coordenadas: "0",
  telefono_garage: "6516542",
  direccion_garage: "San Pedrito 269",
  localidad_garage: "11",
  lugar_autos: "6",
  lugar_bicicletas: "1",
  lugar_camionetas: "2",
  lugar_motos: "111",
  nombre_garage: "Garage de prueba",
} */

class ModificarGaragePage extends React.Component {
  render() {
    
    return (
      <div>
        <Header/>
        <SignupModGarage titulo="Modificar garage" type="UPDATE" garage_data={this.props.garage_data}/>;
      </div>
    )
  }
}

export default ModificarGaragePage