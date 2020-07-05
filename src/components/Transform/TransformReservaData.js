const TransformReservaData = (reserva, rol) => {
  const reserva_data = {
    "reserva_id": reserva.reserva_id,
    "horario": reserva.horario_transaccion,
    "estado": reserva.estado, //actulizado
    "nombre_garage": reserva.nombre_garage,
    "direccion_garage": reserva.direccion,
    "localidad_garage_texto": reserva.nombre_localidad,
    "telefono": reserva.telefono,
    "rol": rol,
    "mail_reserva": reserva.mail,
    "nombre_usuario": reserva.nombre,
    "apellido_usuario": reserva.apellido,
    "garage_id": reserva.garage_id,
    "tipo_vehiculo": reserva.tipo_vehiculo,
    "descripcion_estado": reserva.descripcion,
    }

  return reserva_data;
}

export const TransformFormReserva = (props) => {
  const salida = {
    "user_id": props.user_id,
    "garage_id": props.garage_id,
    "tipo_vehiculo": props.tipo_vehiculo,
   /*  "fecha_hora": props.fecha_reserva+"T"+props.hora_reserva+":00.000Z" */
  }
  return salida
}

export default TransformReservaData;