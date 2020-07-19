const ReservasFiltradas = (reservas, mostrar_reservas) => {
  let reservas_filtradas = [];

  reservas.map((reserva) => {
    if (mostrar_reservas === "activas") {
      if (parseInt(reserva.estado, 10) === 1) {
        return reservas_filtradas.push(reserva)
      }
      else {
        return true;
      }
    }
    else {
      if (parseInt(reserva.estado, 10) !== 1) {
        return reservas_filtradas.push(reserva)
      }
      else {
        return true;
      }
    }
  }
  )
  return reservas_filtradas;
}

export default ReservasFiltradas