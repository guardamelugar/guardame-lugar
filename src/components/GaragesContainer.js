import React from 'react';
import GarageContainer from './GarageContainer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { cookieName } from '../constants/Cookie'
import Cookies from 'universal-cookie'
import GETGaragebyUserID from './DB Connection/GETGaragebyUserID'
import GETGarages from './DB Connection/GETGarages';
import GETGaragesFiltered from './DB Connection/GETGaragesFiltered'
import TransformGarageData from './Transform/TransformGarageData'
import LoadingIndicator from './LoadingIndicator'
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

  cookies = new Cookies();
  cookie = this.cookies.get(cookieName);
  user_id = { "user_id": this.cookie.user_id };

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
      return (
        <Container fluid>
          <Row className="ml-md-5 mr-md-5 justify-content-between">
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
    else {
      if (this.state.loaded === false) {
        return (<LoadingIndicator />)
      }
      else {
        return (
          <>
            <LoadingIndicator />
            <Row className="ml-5 mr-5 mt-3 garagecomp lg={5} justify-content-between">
              <div>
                <h4>El filtro seleccionado no ha arrojado resultados, inténtelo nuevamente.</h4>
              </div>
            </Row>
          </>
        )
      }
    }
  }

};

export default GaragesContainer;