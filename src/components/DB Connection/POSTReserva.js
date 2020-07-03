import axios from 'axios'
import { URL_RESERVAR_LUGAR } from '../../constants/URL'

const POSTReserva = props => {
  const salida = JSON.stringify(props);
  
  axios.post((URL_RESERVAR_LUGAR), salida, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        alert("¡La reserva se realizó con éxito!");
        window.location = '/reservas';
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

export default POSTReserva;