import axios from 'axios'
import { URL_LOGIN } from '../../constants/URL'
import { cookieName } from '../../constants/Cookie'
import Cookies from 'universal-cookie'

const POSTLogin = props => {
  const login_data = {
    "user": props.mail,
    "password": props.password,
  }

  const BakeCookies = (props) => {
    const cookies = new Cookies();
    const date = Date.now() + 2560000000;
    cookies.set(cookieName, props.data, { path: '/' });
    cookies.set('timeout', date, { path: '/' });
    if (props.data.rol === 1) {
      return (window.location = '/index');
    } else {
      return (window.location = '/clientindex');
    }

  }

  axios.post((URL_LOGIN), JSON.stringify(login_data), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
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

export default POSTLogin;