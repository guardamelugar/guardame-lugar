import React from 'react'
import SignupContainer from '../Registro/SignupContainer'
import ChequearCookie from '../Cookie/ChequearCookie'

class SignupPageContainer extends React.Component {
  render() {
    const salida = <SignupContainer />
    return (ChequearCookie(salida, '/index', '/clientindex', '/signup'))
  }
}

export default SignupPageContainer