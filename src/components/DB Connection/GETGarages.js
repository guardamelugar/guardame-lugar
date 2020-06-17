import axios from 'axios'
import { URL_GARAGE_ID } from '../../constants/URL'

const GETGarages = props => {
  axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

  const url_final = URL_GARAGE_ID;

  return axios.get(url_final)
    .then(res => {
      if (res.status === 200) {
        return res.data.result;
      }
    })
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

export default GETGarages;