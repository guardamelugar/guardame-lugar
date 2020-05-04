const TransformGarage = formData => {
  const coordenadas = "0";

  const transformedForm = {
  "altura_maxima": parseInt(formData.altura_maxima,10), 
  "coordenadas": coordenadas, 
  "telefono": formData.telefono_garage, 
  "direccion": formData.direccion_garage, 
  "localidad_garage": parseInt(formData.localidad_garage,10), 
  "lugar_autos": parseInt(formData.lugar_autos,10), 
  "lugar_bicicletas": parseInt(formData.lugar_bicicletas,10), 
  "lugar_camionetas": parseInt(formData.lugar_camionetas,10), 
  "lugar_motos": parseInt(formData.lugar_motos,10), 
  "nombre_garage": formData.nombre_garage,
  }
  console.log(transformedForm);
  return transformedForm;
}

export default TransformGarage;