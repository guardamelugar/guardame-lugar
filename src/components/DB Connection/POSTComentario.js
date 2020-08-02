import axios from 'axios'
import { URL_POST_COMENTARIO } from '../../constants/URL'

const POSTComentario = props => {
  const salida = JSON.stringify(props);
  
  axios.post((URL_POST_COMENTARIO), salida, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        alert("¡Gracias por tu reseña!");
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

export default POSTComentario;