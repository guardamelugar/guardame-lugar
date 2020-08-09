import React from 'react'
import PasswordReset from '../PasswordReset/PasswordReset'
import ChequearCookie from '../Cookie/ChequearCookie'

/* uso de cookie para redirigir al usuario a la pantalla correcta */

const PasswordResetContainer = () => {
  const salida = <PasswordReset />;

  return (ChequearCookie(salida, '/index', '/clientindex', '/passwordReset'));
}

export default PasswordResetContainer;
