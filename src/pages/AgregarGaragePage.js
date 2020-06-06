import React from 'react'
import Header from '../components/Header'
import SignupModGarage from '../components/SignupModGarage'

class AgregarGaragePage extends React.Component {
  render() {
    
    return (
      <div>
        <Header/>
        <SignupModGarage titulo="Agregar garage" type="INSERT"/>;
      </div>
    )
  }
}

export default AgregarGaragePage