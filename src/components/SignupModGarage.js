import React from 'react'
import FormGarage from './FormGarage'
import ChequearCookie from './ChequearCookie'

class SignupModGarage extends React.Component {
  render() {

    const titulo = this.props.titulo;
    const type = this.props.type;

    const salida = <FormGarage titulo={titulo} type={type} />

    return (ChequearCookie(salida, '/forbidden', '/agregargarage', '/login'));
  }
}

export default SignupModGarage