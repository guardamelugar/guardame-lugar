import React, { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MapDefault from './GeoCoding'
import { GMAPS_API_KEY } from '../../constants/URL'

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: props.address,
      myMap: undefined,
      coordenadas: { lat: 10, lng: 10 },
      isMarkerShown: false,
    }
  }

  async componentDidMount() {

    let coordenadas = await MapDefault(this.state.address);

    if (coordenadas !== undefined && coordenadas.direccion !== 'Buenos Aires, Argentina') {
      this.setState({...this.state, coordenadas: coordenadas})
      this.setState({...this.state, isMarkerShown: true})
    } else {
      this.setState({...this.state, coordenadas: { lat: -34.603683, lng: -58.381557 }})
    }
    
    const onMarkerClick = (evt) => {
      window.open(
        'https://www.google.com/maps?saddr=My+Location&daddr=' + this.state.address,
        '_blank' // <- This is what makes it open in a new window.
      );
    };


    let MyMapComponent = undefined;

    MyMapComponent = compose(
      withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GMAPS_API_KEY}`,
        loadingElement: <div style={{ height: `20vh` }} />,
        containerElement: <div style={{ height: `20vh` }} />,
        mapElement: <div style={{ height: `20vh` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((algo, props) =>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: this.state.coordenadas.lat, lng: this.state.coordenadas.lng }}
      >
        {this.state.isMarkerShown && <Marker position={{ lat: this.state.coordenadas.lat, lng: this.state.coordenadas.lng }} onClick={onMarkerClick}/>}
      </GoogleMap>
    )

    this.setState({ ...this.state, myMap: MyMapComponent })
  }


  render() {
    return (
      <div className='mx-auto' style={{ width: "100%", height: "20vh" }}>
        {this.state.myMap !== undefined &&
          <this.state.myMap
          />}
      </div>
    );
  }

}

export default Map;