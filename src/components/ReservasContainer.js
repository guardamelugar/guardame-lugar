import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import RecuperarCookie from './RecuperarCookie'
import LoadingIndicator from './LoadingIndicator'
import GETReservas from './DB Connection/GETReservas';
import TransformReservaData from './Transform/TransformReservaData';
import ReservaContainer from './ReservaContainer';
import FiltrarReservas from './FiltrarReservas'

class ReservasContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "reservas": undefined,
      "loaded": false,
    }
  }

  cookie = RecuperarCookie()
  data = { "user_id": this.cookie.user_id, "rol": this.cookie.rol }
  contador = 0;

  goBack() {
    window.history.back();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.mostrar_reservas !== prevProps.mostrar_reservas) {
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


  render() {
    if (this.state.reservas !== undefined && this.state.reservas !== null && this.state.reservas !== "No Results") {
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

                  if (this.props.mostrar_reservas === "activas"){
                    if (parseInt(transformed_data.estado,10) === 1){
                      this.contador = this.contador + 1;
                      return (<ReservaContainer reserva_data={transformed_data} />)    
                    }
                    else{
                      return true;
                    }
                  }
                  else{
                    if(parseInt(transformed_data.estado,10) !== 1){
                      this.contador = this.contador + 1;
                      return (<ReservaContainer reserva_data={transformed_data} />)    
                    }
                    else{
                      return true;
                    }
                }
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
                  if (this.props.mostrar_reservas === "activas"){
                    if (parseInt(transformed_data.estado,10) === 1){
                      return (<ReservaContainer reserva_data={transformed_data} />)    
                    }
                    else{
                      return true;
                    }
                  }
                  else{
                    if(parseInt(transformed_data.estado,10) !== 1){
                      return (<ReservaContainer reserva_data={transformed_data} />)    
                    }
                    else{
                      return true;
                    }
                }
              })
            }
            </Row>
          </Container>
        )
      }

    }
    else {
      if (this.state.loaded === false && this.state.reservas !== "No Results" && this.contador < 0 ) {
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

                <Row className="mt-3 mx-auto garagecomp lg={5}">
                  <div>
                    <h4>No registrás reservas a la fecha.</h4>
                  </div>
                </Row>
              </Container>
            }
            {
              (parseInt(this.data.rol, 10) === 2) &&
              <Container>
                <Row>
                  <FiltrarReservas changeReservasActivas={this.props.changeReservasActivas} />
                </Row>

                <Row className="mt-3 mx-auto garagecomp lg={5}">
                  <div>
                    <h4>El garage seleccionado no registra reservas a la fecha.</h4>
                  </div>
                </Row>
              </Container>
            }
          </>
        )
      }
    }
  }

};

export default ReservasContainer;