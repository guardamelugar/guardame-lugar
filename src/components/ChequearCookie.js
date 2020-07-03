import React from 'react'
import POSTLogin from './DB Connection/POSTLogin'
import Cookies from 'universal-cookie'
import RecuperarCookie from './RecuperarCookie'

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
            alert("Hubo un problema con tu cookie. Por favor reingresá tus datos.")
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