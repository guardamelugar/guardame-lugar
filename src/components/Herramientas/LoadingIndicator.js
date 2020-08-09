import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

/* usado en la conexion con la base de datos. chequea si hay una promise en curso para mostrar u
ocultar la animacion de carga */

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="Bars" color="#487fb9" height="100" width="100" />
    </div>
  );
}

export default LoadingIndicator