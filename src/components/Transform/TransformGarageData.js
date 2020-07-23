const TransformGarageData = (garage, rol) => {
  const garage_data = {
    "garage_id": garage.garage_id,
    "altura_maxima": garage.altura_maxima,
    "coordenadas": garage.coordenadas,
    "telefono_garage": garage.telefono,
    "direccion_garage": garage.direccion,
    "localidad_garage": garage.localidad_garage,
    "lugar_autos": garage.lugar_autos,
    "lugar_bicicletas": garage.lugar_bicicletas,
    "lugar_camionetas": garage.lugar_camionetas,
    "lugar_motos": garage.lugar_motos,
    "nombre_garage": garage.nombre_garage,
    "localidad_garage_texto": garage.nombre_localidad,
    "contador": garage.contador,
    "promedio": garage.promedio,
    "rol": rol,
  }

  return garage_data;
}

export default TransformGarageData;