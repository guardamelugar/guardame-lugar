import axios from 'axios'
import { URL_GARAGES } from '../../constants/URL'

const GETGaragesFiltered = props => {
  axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
  console.log(props);
  let url_final = ""
  if(props.localidad === "" && props.vehicle_type !== ""){
    url_final = URL_GARAGES+"?vehiculo="+props.vehicle_type;
  } 
  else if(props.localidad !== "" && props.vehicle_type === ""){
    url_final = URL_GARAGES+"?localidad="+parseInt(props.localidad, 10);
  }
  else if(props.localidad !== "" && props.vehicle_type !== ""){
    url_final = URL_GARAGES+"?localidad="+parseInt(props.localidad, 10)+"&vehiculo="+props.vehicle_type;
  }
  else {
    url_final = URL_GARAGES+"/";
  }
  

  return axios.get(url_final)
    .then(res => {
      if (res.status === 200 && res.data.total !== 0){
        return res.data.result;
      } else {
        return "No Results"
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