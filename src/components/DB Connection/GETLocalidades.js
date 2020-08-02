import axios from 'axios'
import { URL_LOCALIDADES, URL_LOCALIDADES_FILTRADAS } from '../../constants/URL'

const GETLocalidades = filtrados => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  let url_final = URL_LOCALIDADES;

  if (filtrados) {
    url_final = URL_LOCALIDADES_FILTRADAS;
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
          alert(err.response.data.message);
        } else {
          alert("No se puede conectar con la base de datos")
        }
      }
    })
}

export default GETLocalidades;