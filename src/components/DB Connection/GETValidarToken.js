import axios from 'axios'
import { URL_VALIDAR_TOKEN } from '../../constants/URL'

/* props seria el token */

const GETValidarToken = props => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  
  const url_final = URL_VALIDAR_TOKEN + props;

  return axios.get(url_final)
    .then(res => {
      if (res.status === 200) {
        return res.data;
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

export default GETValidarToken;