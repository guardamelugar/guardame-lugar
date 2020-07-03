import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { cookieName } from '../constants/Cookie'
import Cookies from 'universal-cookie'
import LoadingIndicator from './LoadingIndicator'
import GETReservas from './DB Connection/GETReservas';
import TransformReservaData from './Transform/TransformReservaData';
import ReservaContainer from './ReservaContainer';

class ReservasContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "reservas": undefined,
      "loaded": false,
    }
  }

  cookies = new Cookies();
  cookie = this.cookies.get(cookieName);
  data = { "user_id": this.cookie.user_id, "rol": this.cookie.rol }

  goBack() {
    window.history.back();
  }

  async componentDidMount() {

    if (parseInt(this.cookie.rol, 10) === 1) {
      const reservas = await GETReservas(this.data);
      this.setState({
        ...this.state, "reservas": reservas
      });
    }
    else {
      if (parseInt(this.cookie.rol, 10) === 2) {

        const data_garage = { "garage_id": this.props.garage_id, "rol": this.cookie.rol };
        const reservas = await GETReservas(data_garage);
        this.setState({
          ...this.state, "reservas": reservas
        });
      }
      else {
        return (window.location = '/index');
      }
    }
  }

  async componentDidUpdate(prevProps) {
    /*     if (this.props.localidad !== prevProps.localidad || this.props.vehicle_type !== prevProps.vehicle_type) {
          if (this.props.filtered === "filtrado") {
    
            const garages = await GETGaragesFiltered(this.props);
            this.setState({
              ...this.state, "garages": garages
            });
    
          } else {
    
            const garages = await GETGarages(this.user_id);
    
            this.setState({
              ...this.state, "garages": garages
            });
    
          }
        } */
  }


  render() {

    if (this.state.reservas !== undefined && this.state.reservas !== null && this.state.reservas !== "No Results") {
      const reservas = this.state.reservas;
      if (this.state.loaded === false) {
        this.setState({ ...this.state, "loaded": true })
      }
      if (reservas.length % 2 !== 0) {
        return (
          <Container fluid>
            <Row className="ml-md-5 mr-md-5 justify-content-around">
              <LoadingIndicator />
              {
                reservas.map((reserva) => {
                  const transformed_data = TransformReservaData(reserva, this.cookie.rol);
                  return (<ReservaContainer reserva_data={transformed_data} />)
                })
              }
              <Col className="mr-md-2 mt-4 garagecomp invisible" lg={5} ></Col>
            </Row>
          </Container>
        )
      } else {
        return (
          <Container fluid>
            <Row className="ml-md-5 mr-md-5 justify-content-around">
              <LoadingIndicator />
              {
                reservas.map((reserva) => {
                  const transformed_data = TransformReservaData(reserva, this.cookie.rol);
                  return (<ReservaContainer reserva_data={transformed_data} />)
                })
              }
            </Row>
          </Container>
        )
      }

    }
    else {
      if (this.state.loaded === false && this.state.reservas !== "No Results") {
        return (<LoadingIndicator />)
      }
      else {
        return (

          <>
            {
              (parseInt(this.data.rol,10) === 1) &&
              <Row className="mt-3 mx-auto garagecomp lg={5}">
                <div>
                  <h4>No registrás reservas a la fecha.</h4>
                </div>
              </Row>
            }
            {
              (parseInt(this.data.rol,10) === 2) &&
              <Row className="mt-3 mx-auto garagecomp lg={5}">
                <div>
                  <h4>El garage seleccionado no registra reservas a la fecha.</h4>
                </div>
              </Row>
            }
          </>
        )
      }
    }
  }

};

export default ReservasContainer;