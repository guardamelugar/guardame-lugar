import axios from 'axios'
import { URL_ACTUALIZAR_RESERVA } from '../../constants/URL'

const PATCHReserva = props => {
  const salida = JSON.stringify(props);
  
  axios.post((URL_ACTUALIZAR_RESERVA), salida, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        alert("¡La reserva se actualizó con éxito!");
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

export default PATCHReserva;