import React from 'react'
import Header from './Header'
import GarageSearch from './GarageSearch'
import ClienteNavBar from './ClienteNavBar'
import ChequearCookie from './ChequearCookie'
import GaragesContainer from './GaragesContainer'

const IndexContainer = () => {
  const salidaUser =
  <section>
    <Header />
    <GarageSearch />
  </section>

  const salidaCliente =
  <section>
    <Header />
    <ClienteNavBar />
    <GaragesContainer />
  </section>
  
  if(window.location.pathname === '/index'){
    return (ChequearCookie(salidaUser, '/index', '/clientindex', '/login'));
  }
  
  if(window.location.pathname === '/clientindex'){
    return (ChequearCookie(salidaCliente, '/index', '/clientindex', '/login'));
  }

}

export default IndexContainer;
