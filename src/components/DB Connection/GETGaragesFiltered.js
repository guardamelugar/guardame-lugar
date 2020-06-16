import axios from 'axios'
import { URL_GARAGES } from '../../constants/URL'

const GETGaragesFiltered = props => {
  axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
  console.log(props);
  let url_final = ""
  if(props.localidad === ""){
    url_final = URL_GARAGES+"?vehicleType="+props.vehicle_type+"&localidad=null";
  } else {
    url_final = URL_GARAGES+"?vehicleType="+props.vehicle_type+"&localidad="+parseInt(props.localidad, 10);
  }
  

  return axios.get(url_final)
    .then(res => {
      if (res.status === 200) {
        return res.data.result;
      }
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.status !== 500) {
          /* alert(err.response.data.message); */
        } else {
          alert("No se puede conectar con la base de datos")
        }
      }
    })
}

export default GETGaragesFiltered;