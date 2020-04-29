const TransformSignup = formData => {
  const rol = ~~(formData.soydueno) + 1

  const transformedForm = {
    "nombre": formData.nombre,
    "apellido": formData.apellido,
    "telefono": formData.telefono,
    "mail": formData.email,
    "contraseña": formData.password,
    "rol": rol
  }

  return transformedForm;
}

export default TransformSignup;