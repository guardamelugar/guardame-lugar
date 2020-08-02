import React from 'react';
import GarageContainer from './GarageContainer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import GETGaragebyUserID from './DB Connection/GETGaragebyUserID'
import GETGarages from './DB Connection/GETGarages';
import GETGaragesFiltered from './DB Connection/GETGaragesFiltered'
import TransformGarageData from './Transform/TransformGarageData'
import LoadingIndicator from './LoadingIndicator'
import RecuperarCookie from './RecuperarCookie'
import '../styles/garagecomp.css'

class GaragesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "garages": null,
      "garage_data": null,
      "loaded": false,
    }
  }

  cookie = RecuperarCookie();
  user_id = { "user_id": this.cookie.user_id };
  rol = this.cookie.rol;

  async componentDidMount() {

    if (parseInt(this.cookie.rol, 10) === 1) {
      const garages = await GETGarages(this.user_id);

      this.setState({
        ...this.state, "garages": garages
      });
    }
    else {
      if (parseInt(this.cookie.rol, 10) === 2) {
        const garages = await GETGaragebyUserID(this.user_id);

        this.setState({
          ...this.state, "garages": garages
        });

      }
      else {
        return (window.location = '/index');
      }
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.localidad !== prevProps.localidad || this.props.vehicle_type !== prevProps.vehicle_type) {
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
    }
  }


  render() {

    if (this.state.garages !== undefined && this.state.garages !== null && this.state.garages !== "No Results") {
      const garages = this.state.garages;
      if (this.state.loaded === false) {
        this.setState({ ...this.state, "loaded": true })
      }
      if (garages.length % 2 !== 0) {
        return (
          <Container>
            <Row className="ml-md-5 mr-md-5 justify-content-around">
              <LoadingIndicator />
              {
                garages.map((garage) => {
                  const transformed_data = TransformGarageData(garage, this.cookie.rol);
                  return (<GarageContainer key={garage.garage_id} garage_data={transformed_data} />)
                })
              }
              <Col className="mr-md-2 mt-4 garagecomp invisible" lg={5} ></Col>
            </Row>
          </Container>
        )
      } else {
        return (
          <Container>
            <Row className="ml-md-5 mr-md-5 justify-content-around">
              <LoadingIndicator />
              {
                garages.map((garage) => {
                  const transformed_data = TransformGarageData(garage, this.cookie.rol);
                  return (<GarageContainer garage_data={transformed_data} />)
                })
              }
            </Row>
          </Container>
        )
      }

    }
    else {
      if (this.state.loaded === false) {
        return (<LoadingIndicator />)
      }
      else {
        return (
          <>
            <LoadingIndicator />
            {(parseInt(this.rol, 10) === 1) &&
              <Row className="mt-3 garagecomp lg={5} mx-auto">
                <div>
                  <h4>El filtro seleccionado no ha arrojado resultados, inténtelo nuevamente.</h4>
                </div>
              </Row>
            }
            {(parseInt(this.rol, 10) === 2) &&
              <Row className="mt-3 garagecomp lg={5} mx-auto">
                <div>
                  <h4>Todavía no registraste garages.</h4>
                </div>
              </Row>
            }
          </>
        )
      }
    }
  }

};

export default GaragesContainer;