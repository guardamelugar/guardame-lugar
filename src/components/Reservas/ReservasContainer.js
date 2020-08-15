import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import RecuperarCookie from '../Cookie/RecuperarCookie'
import LoadingIndicator from '../Herramientas/LoadingIndicator'
import GETReservas from '../DB Connection/GETReservas';
import TransformReservaData from '../Transform/TransformReservaData';
import ReservaContainer from './ReservaContainer';
import FiltrarReservas from './FiltrarReservas'
import ReservasFiltradas from './ReservasFiltradas'

class ReservasContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "reservas": [],
      "loaded": false,
    }
  }

  cookie = RecuperarCookie()
  data = { "user_id": this.cookie.user_id, "rol": this.cookie.rol }

  goBack() {
    window.history.back();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.mostrar_reservas !== prevProps.mostrar_reservas) {
      if (this.props.mostrar_reservas === "refrescar") {
        this.props.changeReservasActivas("activas");
      }
      else {
        if (parseInt(this.cookie.rol, 10) === 1) {
          let reservas = await GETReservas(this.data);
          reservas = ReservasFiltradas(reservas, this.props.mostrar_reservas);

          this.setState({
            ...this.state, "reservas": reservas
          });
        }
        else {
          if (parseInt(this.cookie.rol, 10) === 2) {

            const data_garage = { "garage_id": this.props.garage_id, "rol": this.cookie.rol };
            let reservas = await GETReservas(data_garage);
            reservas = ReservasFiltradas(reservas, this.props.mostrar_reservas);

            this.setState({
              ...this.state, "reservas": reservas
            });
          }
          else {
            return (window.location = '/index');
          }
        }
      }
    }
  }

  async componentDidMount() {
    if (parseInt(this.cookie.rol, 10) === 1) {
      let reservas = await GETReservas(this.data);
      reservas = ReservasFiltradas(reservas, this.props.mostrar_reservas);
      this.setState({
        ...this.state, "reservas": reservas
      });
    }
    else {
      if (parseInt(this.cookie.rol, 10) === 2) {
        if (this.props.garage_id === undefined) {
          alert("Por favor seleccione un garage")
          return (window.location = '/clientindex');
        }
        const data_garage = { "garage_id": this.props.garage_id, "rol": this.cookie.rol };
        let reservas = await GETReservas(data_garage);
        reservas = ReservasFiltradas(reservas, this.props.mostrar_reservas);

        this.setState({
          ...this.state, "reservas": reservas
        });
      }
      else {
        return (window.location = '/index');
      }
    }
  }


  render() {
    if (this.state.reservas !== undefined && this.state.reservas !== null && this.state.reservas.length !== 0) {
      const reservas = this.state.reservas;
      if (this.state.loaded === false) {
        this.setState({ ...this.state, "loaded": true })
      }
      if (reservas.length % 2 !== 0) {
        return (
          <Container>
            <Row>
              <FiltrarReservas changeReservasActivas={this.props.changeReservasActivas} />
            </Row>
            <Row className="ml-md-5 mr-md-5 justify-content-around">
              <LoadingIndicator />
              {
                reservas.map((reserva) => {
                  const transformed_data = TransformReservaData(reserva, this.cookie.rol);
                  return (<ReservaContainer reserva_data={transformed_data} changeReservasActivas={this.props.changeReservasActivas} />)
                })
              }
              <Col className="mr-md-2 mt-4 garagecomp invisible" lg={5} ></Col>
            </Row>
          </Container>
        )
      } else {
        return (
          <Container>
            <Row>
              <FiltrarReservas changeReservasActivas={this.props.changeReservasActivas} />
            </Row>
            <Row className="ml-md-5 mr-md-5 justify-content-around">
              <LoadingIndicator />
              {
                reservas.map((reserva) => {
                  const transformed_data = TransformReservaData(reserva, this.cookie.rol);
                  return (<ReservaContainer key={transformed_data.reserva_id}
                    reserva_data={transformed_data} changeReservasActivas={this.props.changeReservasActivas} />)
                })
              }
            </Row>
          </Container>
        )
      }

    }
    else {
      if (this.state.loaded === false && this.state.reservas.length !== 0) {
        return (<Container>
          <Row>
            <FiltrarReservas changeReservasActivas={this.props.changeReservasActivas} />
          </Row>
          <LoadingIndicator />
        </Container>)
      }
      else {
        return (

          <>
            {
              (parseInt(this.data.rol, 10) === 1) &&
              <Container>
                <Row>
                  <FiltrarReservas changeReservasActivas={this.props.changeReservasActivas} />
                </Row>
                {this.props.mostrar_reservas === "activas" &&
                  <Row className="mt-3 mx-auto garagecomp lg={5}">
                    <div>
                      <h4>No registrás reservas activas a la fecha.</h4>
                    </div>
                  </Row>
                }
                {this.props.mostrar_reservas === "inactivas" &&
                  <Row className="mt-3 mx-auto garagecomp lg={5}">
                    <div>
                      <h4>No registrás reservas completas o canceladas a la fecha.</h4>
                    </div>
                  </Row>
                }
                {this.props.mostrar_reservas === "encurso" &&
                  <Row className="mt-3 mx-auto garagecomp lg={5}">
                    <div>
                      <h4>No registrás reservas en curso a la fecha.</h4>
                    </div>
                  </Row>
                }
              </Container>
            }
            {
              (parseInt(this.data.rol, 10) === 2) &&
              <Container>
                <Row>
                  <FiltrarReservas changeReservasActivas={this.props.changeReservasActivas} />
                </Row>
                {this.props.mostrar_reservas === "activas" &&
                  <Row className="mt-3 mx-auto garagecomp lg={5}">
                    <div>
                      <h4>El garage seleccionado no registra reservas activas a la fecha.</h4>
                    </div>
                  </Row>
                }
                {this.props.mostrar_reservas === "inactivas" &&
                  <Row className="mt-3 mx-auto garagecomp lg={5}">
                    <div>
                      <h4>El garage seleccionado no registra reservas completas o canceladas a la fecha.</h4>
                    </div>
                  </Row>
                }
                {this.props.mostrar_reservas === "encurso" &&
                  <Row className="mt-3 mx-auto garagecomp lg={5}">
                    <div>
                      <h4>El garage seleccionado no registra reservas en curso a la fecha.</h4>
                    </div>
                  </Row>
                }
              </Container>
            }
          </>
        )
      }
    }
  }

};

export default ReservasContainer;