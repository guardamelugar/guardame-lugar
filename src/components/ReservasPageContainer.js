import React from 'react'
import ClienteNavBar from './ClienteNavBar'
import ChequearCookie from './ChequearCookie'

const ReservasPageContainer = (props) => {
  const salidaUser =
  <section>
    
  </section>

  //garage_id viene de ReservasPage como props
  const garage_id = props.garage_id;

  const salidaCliente =
  <section>
    <ClienteNavBar />

  </section>
  
  if(window.location.pathname === '/reservas'){
    return (ChequearCookie(salidaUser, '/reservas', '/reservascliente', '/login'));
  }
  
  if(window.location.pathname === '/reservascliente'){
    return (ChequearCookie(salidaCliente, '/reservas', '/reservascliente', '/login'));
  }

}

export default ReservasPageContainer;
