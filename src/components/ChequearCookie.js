import React from 'react'
import GETLogin from './DB Connection/GETLogin'
import { cookieName } from '../constants/Cookie'
import Cookies from 'universal-cookie'


const ChequearCookie = (salida, user_redirect, client_redirect, landing_redirect) => {
  const cookies = new Cookies();
  const cookie = cookies.get(cookieName);
  const timeout = cookies.get('timeout');
  const date = Date.now();

  if (cookie === undefined || cookie === null || timeout === undefined) {
    if(window.location.pathname === landing_redirect){
      return (
        salida
      );
    } else {
      return (window.location = landing_redirect)
    }
  }
  else {
    if (timeout > date && (cookie !== undefined || cookie !== null)) {
      if(window.location.pathname === landing_redirect){
        if (cookie.rol === 1) {
          return(window.location = user_redirect);
        } else {
          return(window.location = client_redirect);
        }
      } else if (window.location.pathname === user_redirect){
        if (cookie.rol === 1) {
          return salida;
        } else {
          return(window.location = client_redirect);
        }
      } else if (window.location.pathname === client_redirect){
        if (cookie.rol === 2) {
          return salida;
        } else {
          return (window.location = user_redirect);
        }
      }
    } else {
      const mail = cookie.mail;
      const password = cookie.contraseña;
      const jsonForm = {
        'mail': mail,
        'password': password,
      }

      return (
        <>
        {GETLogin(jsonForm)}
        </>
      );
    }
  }
}

export default ChequearCookie