import React from 'react'
import POSTLogin from '../DB Connection/POSTLogin'
import Cookies from 'universal-cookie'
import RecuperarCookie from './RecuperarCookie'

/* recibe 
salida: codigo o html a ser mostrado si la validacion es correcta
user_redirect: si el usuario (rol 1) quiere ingresar a un area no permitida sera redirigido a esa url 
client_redirect: si el cliente (rol 2) quiere ingresar a un area no permitida sera redirigido a esa url
landing_redirect: redirige a login si falla el chequeo de la cookie (i.e. no existe/no es valida)*/

const ChequearCookie = (salida, user_redirect, client_redirect, landing_redirect) => {
  const cookies = new Cookies();

  const timeout = cookies.get('timeout');
  const date = Date.now();
  const cookie = RecuperarCookie();

  if (cookie === undefined || cookie === null || timeout === undefined) {
    if (window.location.pathname === landing_redirect) {
      return (
        salida
      );
    } else {
      return (window.location = landing_redirect)
    }
  }
  else {
    if (timeout > date && (cookie !== undefined || cookie !== null)) {
      if (window.location.pathname === landing_redirect) {
        if (parseInt(cookie.rol, 10) === 1) {
          return (window.location = user_redirect);
        }
        else {
          if (parseInt(cookie.rol, 10) === 2) {
            return (window.location = client_redirect);
          }
          else {
            alert("Hay un problema con la información de la cookie. Por favor logueate nuevamente.")
            return salida;
          }
        }
      }

      else {

        if (window.location.pathname === user_redirect) {
          if (parseInt(cookie.rol, 10) === 1) {
            return salida;
          } else {
            if (parseInt(cookie.rol, 10) === 2) {
              return (window.location = client_redirect);
            }
            else {
              return (window.location = landing_redirect)
            }
          }
        }

        else {

          if (window.location.pathname === client_redirect) {
            if (parseInt(cookie.rol, 10) === 2) {
              return salida;
            } else {
              if (parseInt(cookie.rol, 10) === 1) {
                return (window.location = user_redirect);
              }
              else {
                return (window.location = landing_redirect)
              }
            }
          }

          else {
            const mail = cookie.mail;
            const password = cookie.contraseña;
            const jsonForm = {
              'mail': mail,
              'password': password,
            }

            return (
              <>
                {POSTLogin(jsonForm)}
              </>
            );
          }
        }
      }
    }
  }
}

export default ChequearCookie