import React from 'react'
import ClienteNavBar from './ClienteNavBar'
import ChequearCookie from './ChequearCookie'
import GaragesContainer from './GaragesContainer'
import UserContainer from './UserContainer'

const IndexContainer = () => {
  const salidaUser =
    <section>
      <UserContainer />
    </section>

  const salidaCliente =
    <section>
      <ClienteNavBar />
      <GaragesContainer />
    </section>

  if (window.location.pathname === '/index') {
    return (ChequearCookie(salidaUser, '/index', '/clientindex', '/login'));
  }

  if (window.location.pathname === '/clientindex') {
    return (ChequearCookie(salidaCliente, '/index', '/clientindex', '/login'));
  }

}

export default IndexContainer;
