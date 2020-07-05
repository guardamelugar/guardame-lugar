import React from 'react'
import ClienteNavBar from './ClienteNavBar'
import UserNavBar from './UserNavBar'
import ChequearCookie from './ChequearCookie'
import ReservasContainer from './ReservasContainer'

const ReservasPageContainer = (props) => {
  const salidaUser =
    <section>
      <UserNavBar />
      <ReservasContainer />
    </section>
  //garage_id viene de ReservasPage como props
  const garage_id = props.garage_id;

  const salidaCliente =
    <section>
      <ClienteNavBar />
      <ReservasContainer garage_id={props.garage_id} />
    </section>

  if (window.location.pathname === '/reservas') {
    return (ChequearCookie(salidaUser, '/reservas', '/reservascliente', '/login'));
  }

  if (window.location.pathname === '/reservascliente') {
    return (ChequearCookie(salidaCliente, '/reservas', '/reservascliente', '/login'));
  }

}

export default ReservasPageContainer;
