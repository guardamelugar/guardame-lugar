import axios from 'axios'
import { URL_LOCALIDADES } from '../../constants/URL'

const GETLocalidades = props => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

return axios.get(URL_LOCALIDADES)
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

export default GETLocalidades;