import React from 'react'
import ClienteNavBar from './ClienteNavBar'
import UserNavBar from './UserNavBar'
import ChequearCookie from './ChequearCookie'
import ReservasContainer from './ReservasContainer'

class ReservasPageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.changeReservasActivas = this.changeReservasActivas.bind(this);
    this.state = {
      ...this.state,
      mostrar_reservas: "activas",
    }
  }

  changeReservasActivas(status) {
    this.setState({ ...this.state, mostrar_reservas: status })
  }

  render() {
    const salidaUser =
      <section>
        <UserNavBar />
        <ReservasContainer changeReservasActivas={this.changeReservasActivas}
          mostrar_reservas={this.state.mostrar_reservas} />
      </section>

    //garage_id viene de ReservasPage como props
    const garage_id = this.props.garage_id;

    const salidaCliente =
      <section>
        <ClienteNavBar />
        <ReservasContainer garage_id={this.props.garage_id} changeReservasActivas={this.changeReservasActivas}
          mostrar_reservas={this.state.mostrar_reservas} />
      </section>

    if (window.location.pathname === '/reservas') {
      return (ChequearCookie(salidaUser, '/reservas', '/reservascliente', '/login'));
    }

    if (window.location.pathname === '/reservascliente') {
      return (ChequearCookie(salidaCliente, '/reservas', '/reservascliente', '/login'));
    }
  }
}

export default ReservasPageContainer;
