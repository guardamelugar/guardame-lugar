import axios from 'axios'
import { URL_COMENTARIO_POR_GARAGE } from '../../constants/URL'
import { trackPromise } from 'react-promise-tracker';

const GETGarages = garage_id => {
  axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

  const url_final = URL_COMENTARIO_POR_GARAGE + garage_id;

  return trackPromise(axios.get(url_final)
    .then(res => {
      if (res.status === 200) {
        return res.data.result;
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

export default GETGarages;