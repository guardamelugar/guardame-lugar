const ConvertirFecha = (fecha) => {

  const len = fecha.length;
  let i = 0;
  let salida = "";

  while (i < len ) {
    if (fecha[i] && fecha[i] !== 'T') {
        salida = salida+fecha[i]
    }
    if (fecha[i] === 'T') {
      salida = salida + ' '
    }
    i++;
  }

  return salida + "hs"

}

export default ConvertirFecha