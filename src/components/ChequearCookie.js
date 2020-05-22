import React from 'react'
import GETLogin from './DB Connection/GETLogin'
import { cookieName } from '../constants/Cookie'
import Cookies from 'universal-cookie'


const ChequearCookie = (salida, user_redirect, client_redirect) => {
  const cookies = new Cookies();
  const cookie = cookies.get(cookieName);
  const timeout = cookies.get('timeout');
  const date = Date.now();

  if (cookie === undefined || cookie === null || timeout === undefined) {
    return (
      salida
    );
  }
  else {
    if (timeout > date) {
      if (cookie.rol === 1) {
        return(window.location = user_redirect);
      } else {
        return(window.location = client_redirect);
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
        {salida}
        </>
      );
    }
  }
}

export default ChequearCookie