import React from 'react'
import FormGarage from './FormGarage'
/* import ChequearCookie from './ChequearCookie' */
/* El uso de la cookie esta comentado si no se usa el componente en su propia pagina sino embebido */

class SignupModGarage extends React.Component {
  render() {

    const {titulo, type, garage_data } = this.props;

    return <FormGarage titulo={titulo} type={type} garage_data={garage_data} />

/*     if (type === "INSERT") {
      return (ChequearCookie(salida, '/forbidden', '/agregargarage', '/login'));
    }
    else {
      return (ChequearCookie(salida, '/forbidden', '/modificargarage', '/login'));
    } */
  }
}

export default SignupModGarage