const TransformReservaData = (reserva, rol) => {
  const reserva_data = {
    "reserva_id": reserva.reserva_id,
    "horario": reserva.horario_transaccion,
    "activo": reserva.activo_sw,
    "nombre_garage": reserva.nombre_garage,
    "direccion_garage": reserva.direccion,
    "localidad_garage_texto": reserva.nombre_localidad,
    "telefono": reserva.telefono,
    "rol": rol,
  }

  return reserva_data;
}

export default TransformReservaData;