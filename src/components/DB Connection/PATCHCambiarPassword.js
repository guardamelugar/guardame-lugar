import axios from 'axios'
import { URL_ACTUALIZAR_PASSWORD } from '../../constants/URL'

/* props contiene user_id y password nuevo */

const PATCHCambiarPassword = props => {

  axios.patch((URL_ACTUALIZAR_PASSWORD), JSON.stringify(props), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        alert("¡La contraseña se actualizó con éxito!");
        return window.location = '/login';
      }
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.status !== 500) {
          return alert(err.response.data.message);
        } else {
          return alert("No se puede conectar con la base de datos")
        }
      }
    })
}

export default PATCHCambiarPassword;