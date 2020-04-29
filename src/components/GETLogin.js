import axios from 'axios';
import { URL_LOGIN } from '../constants/URL';
import { cookieName } from '../constants/Cookie'
import Cookies from 'universal-cookie';

const GETLogin = props => {
  const urlWData = URL_LOGIN + '/' + props.mail + '/' + props.password

  const BakeCookies = (props) => {
    const cookies = new Cookies();
    cookies.set(cookieName+props.data.mail, props.data, { path: '/' });
    if (props.data.rol === 1) {
      window.location = '/index';
    } else {
      window.location = '/clientindex';
    }

  }

  axios.get(urlWData)
    .then(res => {
      if (res.status === 200) {
        return (BakeCookies(res))
      }
    })
    .catch(function (err) {
      if (err.response) {
        if (err.response.status === 404) {
          alert("El usuario/contraseña es inválido");
        } else {
          alert("No se puede conectar con la base de datos")
        }
      }
    })
}

export default GETLogin;