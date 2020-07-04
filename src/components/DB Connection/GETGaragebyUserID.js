import axios from 'axios'
import { URL_GARAGE_USUARIO } from '../../constants/URL'
import { trackPromise } from 'react-promise-tracker';

/*

Componente necesita se llamado con las siguientes propiedades

props = {
  user_id:
}

i.e. <GETGaragebyUserID user_id='7' />

*/

const GETGaragebyUserID = props => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  const url_final = URL_GARAGE_USUARIO + parseInt(props.user_id, 10);

  return trackPromise(axios.get(url_final)
    .then(res => {
      if (res.status === 200 && res.data.total !== 0) {
        return res.data.result;
      } else {
        return "No Results"
      }
    }))
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