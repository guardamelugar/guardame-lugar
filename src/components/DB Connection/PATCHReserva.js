import axios from 'axios'
import { URL_ACTUALIZAR_RESERVA } from '../../constants/URL'

const PATCHReserva = props => {
  const salida = {reserva_id: props.reserva_id, estado: props.estado}

  axios.patch((URL_ACTUALIZAR_RESERVA), salida, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        alert("¡La reserva se actualizó con éxito!");
        return props.changeReservasActivas("refrescar");
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