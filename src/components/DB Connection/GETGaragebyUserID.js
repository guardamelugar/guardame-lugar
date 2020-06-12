import axios from 'axios'
import { URL_GARAGE_USUARIO } from '../../constants/URL'

/*

Componente necesita se llamado con las siguientes propiedades

props = {
  user_id:
}

i.e. <GETGaragebyUserID user_id='7' />

i.e.
  
  const datos = 
    {
      user_id: '7',
    }
  
  const salida = GETGaragebyUserID(datos);  // devuelve el array de garages

*/

const GETGaragebyUserID = props => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  const url_final = URL_GARAGE_USUARIO + parseInt(props.user_id, 10);

  return axios.get(url_final)
    .then(res => {
      if (res.status === 200) {
        console.log(res.data.result);
        return res.data.result;
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

export default GETGaragebyUserID;