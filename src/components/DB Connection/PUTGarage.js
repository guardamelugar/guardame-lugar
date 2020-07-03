import axios from 'axios'
import { URL_UPDATE_GARAGE } from '../../constants/URL'

const PUTGarage = props => {
  const salida = JSON.stringify(props);
  axios.put((URL_UPDATE_GARAGE), salida, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        alert("El garage se guardó con éxito");
        window.location = '/clientindex';
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

export default PUTGarage;