import axios from 'axios'
import { URL_COMENTARIO_POR_RESERVA } from '../../constants/URL'
import { trackPromise } from 'react-promise-tracker';

const GETGarages = reserva_id => {
  axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

  const url_final = URL_COMENTARIO_POR_RESERVA + reserva_id;

  return trackPromise(axios.get(url_final)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    }))
    .catch(function (err) {
      if (err.response) {
        if (err.response.status === 404) {
          return "No data"
        }
        else if (err.response.status !== 500) {
          alert(err.response.data.message);
        } else {
          alert("No se puede conectar con la base de datos")
        }
      }
    })
}

export default GETGarages;