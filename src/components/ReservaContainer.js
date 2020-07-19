import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ConvertirFecha from './ConvertirFecha'
import '../styles/garagecomp.css'
import PATCHReserva from './DB Connection/PATCHReserva'

/* El componente necesita que se le manden estos datos.
reserva_data: reserva_data = {
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
        "rol": "",
        rol = 1 || 2 --> viene de la cookie    
        }

}

    localidad_garage_texto Es el valor asociado al ID de localidad. Ej. Almagro. */

const ReservaContainer = (props) => {

    const cancel_reserva = { reserva_id: props.reserva_data.reserva_id, estado: 3, changeReservasActivas: props.changeReservasActivas }

    const completar_reserva = { reserva_id: props.reserva_data.reserva_id, estado: 2, changeReservasActivas: props.changeReservasActivas }

    return (<Col className="mr-md-2 mt-4 reservacomp" xs={10} id={props.reserva_data.reserva_id}>
        <Row className='ml-2'><Col className='nombreGarage' id="reserva_id">Identificador de Reserva: {props.reserva_data.reserva_id}</Col></Row>
        <hr></hr>
        <Row className='ml-2 mt-3'>
            <Col xs={12} id="horario"><span>Fecha y hora: </span><span className="valor_campo text-muted">{ConvertirFecha(props.reserva_data.horario)}</span></Col>
            <Col md={6} id="estado"><span>Estado: </span><span className="valor_campo text-muted">{props.reserva_data.descripcion_estado}</span></Col>
            <Col md={6} id="tipo_vehiculo"><span>Vehículo: </span><span className="valor_campo text-muted">{props.reserva_data.tipo_vehiculo}</span></Col>
        </Row>
        {props.reserva_data.rol === 2 &&
            <Row className='ml-2 mt-2'>
                <Col xs={12}><span className="lugar_disponible datos_reserva">DATOS DEL USUARIO</span></Col>
                <Col xs={12} id="nombre_usuario"><span>Nombre y apellido: </span><span className="valor_campo text-muted">
                    {props.reserva_data.nombre_usuario + " " + props.reserva_data.apellido_usuario}
                </span></Col>
                <Col sm={6} id="direccion"><span>Mail: </span><span className="valor_campo text-muted">{props.reserva_data.mail_reserva}</span></Col>
                <Col sm={6} id="telefono"><span>Teléfono: </span><span className="valor_campo text-muted">{props.reserva_data.telefono}</span></Col>
            </Row>
        }
        <Row className='ml-2 mt-2'>
            <Col xs={12}><span className="lugar_disponible datos_reserva">DATOS DEL GARAGE</span></Col>
            <Col sm={6} id="nombre_garage"><span>Nombre Garage: </span><span className="valor_campo text-muted">{props.reserva_data.nombre_garage}</span></Col>
            <Col sm={6} id="nombre_localidad"><span>Localidad: </span><span className="valor_campo text-muted">{props.reserva_data.localidad_garage_texto}</span></Col>
            <Col sm={12} id="direccion"><span>Dirección: </span><span className="valor_campo text-muted">{props.reserva_data.direccion_garage}</span></Col>
            {props.reserva_data.rol === 1 &&
                <Col sm={6} id="telefono"><span>Teléfono: </span><span className="valor_campo text-muted">{props.reserva_data.telefono}</span></Col>
            }
        </Row>
        <Row className='mt-3 text-center justify-content-center'>
                <Col xs={12} lg={4}>
                    {parseInt(props.reserva_data.estado, 10) === 1 && <button className="btn btn-danger btn-block"
                        onClick={() => PATCHReserva(cancel_reserva)}>CANCELAR RESERVA</button>}
                </Col>
                <Col xs={12} lg={4}>
                    {parseInt(props.reserva_data.estado, 10) === 1 && props.reserva_data.rol === 2 && <button className="btn btn-success btn-block"
                        onClick={() => PATCHReserva(completar_reserva)}>COMPLETAR RESERVA</button>}
                </Col>
        </Row>
    </Col>)
};

export default ReservaContainer;