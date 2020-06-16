import React from 'react';
import GarageContainer from './GarageContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { cookieName } from '../constants/Cookie'
import Cookies from 'universal-cookie'
import GETGaragebyUserID from './DB Connection/GETGaragebyUserID'
import GETGarages from './DB Connection/GETGarages';
import GETGaragesFiltered from './DB Connection/GETGaragesFiltered'
import TransformGarageData from './Transform/TransformGarageData'
import '../styles/garagecomp.css'


class GaragesContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      "garages": null,
      "garage_data": null
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

        console.log(garages);
      
    } 
    else {
      if (parseInt(this.cookie.rol, 10) === 2) {
        const garages = await GETGaragebyUserID(this.user_id);

        this.setState({
          ...this.state, "garages": garages
        });

        console.log(garages);

      }
      else {
        return (window.location = '/index');
      }
    }
  }

  async componentDidUpdate(prevProps) {
      if(this.props.localidad !== prevProps.localidad || this.props.vehicle_type !== prevProps.vehicle_type){
        if(this.props.filtered === "filtrado" && this.props.localidad !== "") {
          
          const garages = await GETGaragesFiltered(this.props);
      
          this.setState({
            ...this.state, "garages": garages
          });
      
          console.log(garages);

      } else {

        const garages = await GETGaragesFiltered(this.props);
      
          this.setState({
            ...this.state, "garages": garages
          });
      
          console.log(garages);

      }
    }
  }


  render() {

    if (this.state.garages !== undefined && this.state.garages !== null) {
      const garages = this.state.garages;
      return (
        <Container fluid>
          <Row className="ml-5 mr-5 justify-content-between">
            {
              garages.map((garage) => {
                const transformed_data = TransformGarageData(garage, this.cookie.rol);
                console.log(transformed_data);
                return (<GarageContainer garage_data={transformed_data} />)

              }
              )
            }
          </Row>
        </Container>
      )
    }
    else {
      return (null)
    }
  }

};

export default GaragesContainer;