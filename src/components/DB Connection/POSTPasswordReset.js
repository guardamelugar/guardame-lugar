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
        alert("Un email fue enviado a esta casilla de correo con instrucciones. Revisar Spam si no lo encontrás.");
        window.location = '/login';
      }
    })
    .catch(function (err) {
      alert("El email ingresado no pertenece a un usuario registrado.");
    })
}

export default POSTPasswordReset;