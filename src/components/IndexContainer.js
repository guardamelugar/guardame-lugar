import React from 'react'
import Header from './Header'
import GarageSearch from './GarageSearch'
import ChequearCookie from './ChequearCookie'

const IndexContainer = () => {
  const salida =
  <section>
    <Header />
    <GarageSearch />
  </section>
  return (ChequearCookie(salida, '/index', '/clientindex', '/login'));

}

export default IndexContainer;
