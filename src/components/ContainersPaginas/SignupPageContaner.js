import React from 'react'
import SignupContainer from '../Registro/SignupContainer'
import ChequearCookie from '../Cookie/ChequearCookie'

/* uso de cookie para redirigir al usuario a la pantalla correcta */

class SignupPageContainer extends React.Component {
  render() {
    const salida = <SignupContainer />
    return (ChequearCookie(salida, '/index', '/clientindex', '/signup'))
  }
}

export default SignupPageContainer