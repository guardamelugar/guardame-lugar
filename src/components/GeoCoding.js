import Geocode from "react-geocode";
import { GMAPS_API_KEY } from '../constants/URL'

const MapDefault = props => {

  Geocode.setApiKey(`${GMAPS_API_KEY}`);

  let getLatLong = new Promise(function (resolve, reject) {
    let salida = Geocode.fromAddress(props).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        return ({ lat: lat, lng: lng })
      }
    ).catch(function (err) {
      if (err.response) {
        if (err.response.status !== 500) {
          alert(err.response.data.message);
        } else {
          alert("No se puede conectar con la base de datos")
        }
      }
    })
    if (salida !== undefined) {
      resolve(salida);
    }
    else {
      reject();
    }
  })
  return getLatLong
}

export default MapDefault