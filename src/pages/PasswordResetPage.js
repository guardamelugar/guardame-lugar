import React from 'react'
import PasswordReset from '../components/PasswordReset'
import ChequearCookie from '../components/ChequearCookie'

class PasswordResetPage extends React.Component {
  
  salida = <PasswordReset />;

  render() {
    
    if (window.location.pathname === '/passwordReset') {
      return (ChequearCookie(this.salida, '/index', '/clientindex', '/passwordReset'));
    }
    return ;
  }
}

export default PasswordResetPage