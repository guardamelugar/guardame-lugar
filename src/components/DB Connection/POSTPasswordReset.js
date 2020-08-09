import axios from 'axios'
import { URL_PASSWORD_RESET } from '../../constants/URL'

/* props contiene el mail y la url */

const POSTPasswordReset = props => {
  axios.post((URL_PASSWORD_RESET), JSON.stringify(props), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        alert("El usuario se guardó con éxito");
        window.location = '/login';
      }
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.status === 400) {
          alert("El email ya existe en nuestros registros");
        } else {
          alert("No se puede conectar con la base de datos")
        }
      }
    })
}

export default POSTPasswordReset;