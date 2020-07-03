import axios from 'axios'
import { URL_RESERVAS_POR_GARAGE, URL_RESERVAS_USUARIO } from '../../constants/URL'
import { trackPromise } from 'react-promise-tracker'

/* reservas por usuario necesita como props
{rol: "",
user_id: ""}

reservas por cliente necesita como props
{rol: "",
garage_id:""} */

const GETReservas = props => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  let url_final = undefined;
  if (parseInt(props.rol,10) === 1) {
    url_final = URL_RESERVAS_USUARIO + (parseInt(props.user_id,10));
  }
  if (parseInt(props.rol,10) === 2) {
    url_final = URL_RESERVAS_POR_GARAGE + (parseInt(props.garage_id,10));
  }
  
  return trackPromise(axios.get(url_final)
    .then(res => {
      if (res.status === 200 && res.data.total !== 0) {
        return res.data.result;
      } else {
        return "No Results"
      }
    }))
    .catch(function (err) {
      if (err.response) {
        if (err.response.status !== 500) {
          alert(err.response.data.message);
        } else {
          alert("No se puede conectar con la base de datos")
        }
      }
    })
}

export default GETReservas;