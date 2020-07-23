/* Para poder manejar distintas URLs en Desarrollo y Produccion */
const DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:50500' : 'https://guardame-lugar.azurewebsites.net';

export const URL_SIGNUP = DOMAIN + '/guardamelugar/clientes/signup'
export const URL_LOGIN = DOMAIN + '/guardamelugar/clientes/login'
export const URL_REGISTER_GARAGE = DOMAIN + '/guardamelugar/garages/garageregister'
export const URL_LOCALIDADES = DOMAIN + '/guardamelugar/garages/localidades'
export const URL_LOCALIDADES_FILTRADAS = DOMAIN + '/guardamelugar/Garages/Localidades/garages'
export const URL_GARAGE_USUARIO = DOMAIN + '/guardamelugar/garages/user/'
export const URL_UPDATE_GARAGE = DOMAIN + '/guardamelugar/garages'
export const URL_GARAGE_ID = DOMAIN + '/guardamelugar/garages/'
export const URL_GARAGES = DOMAIN + '/guardamelugar/Garages'
export const URL_RESERVAS_POR_GARAGE = DOMAIN + '/guardamelugar/Garages/reservation/garage/'
export const URL_RESERVAS_USUARIO = DOMAIN + '/guardamelugar/Garages/reservation/user/'
export const URL_RESERVAR_LUGAR = DOMAIN + '/guardamelugar/Garages/reservation'
export const URL_ACTUALIZAR_RESERVA = DOMAIN + '/guardamelugar/Garages'
