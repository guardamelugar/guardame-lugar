const ConvertirFecha = (fecha) => {

  const anio = fecha.substring(0, 4);
  const mes = fecha.substring(5, 7);
  const dia = fecha.substring(8, 10);
  const hora = fecha.substring(11, 19);

  let mes_texto = "";

  switch (mes) {
    case '01':
      mes_texto = "Enero";
      break;
    case '02':
      mes_texto = "Febrero";
      break;
    case '03':
      mes_texto = "Marzo";
      break;
    case '04':
      mes_texto = "Abril";
      break;
    case '05':
      mes_texto = "Mayo";
      break;
    case '06':
      mes_texto = "Junio";
      break;
    case '07':
      mes_texto = "Julio";
      break;
    case '08':
      mes_texto = "Agosto";
      break;
    case '09':
      mes_texto = "Septiembre";
      break;
    case '10':
      mes_texto = "Octubre";
      break;
    case '11':
      mes_texto = "Noviembre";
      break;
    case '12':
      mes_texto = "Diciembre";
      break;
    default: mes_texto = "Diciembre";
  }

  const salida = dia + " de " + mes_texto + " " + anio + " " + hora + "hs"

  return salida;

}

export default ConvertirFecha