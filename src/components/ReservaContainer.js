import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import ModificarGaragePage from '../pages/ModificarGaragePage';
import '../styles/garagecomp.css'

/* El componente necesita que se le manden estos datos.
reserva_data: {
    "reserva_id": "",
    "horario": "",
    "activo": "",
    "nombre_garage": "",
    "direccion_garage": "",
    "localidad_garage_texto": "",
    "telefono": "",
    "rol": "",
    rol = 1 || 2 --> viene de la cookie    
    }

}

    localidad_garage_texto Es el valor asociado al ID de localidad. Ej. Almagro. */
const ReservaContainer = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (<Col className="mr-md-2 mt-4 garagecomp" lg={5} id={props.reserva_data.reserva_id}>
        <Row className='ml-2'><Col className='nombreGarage' id="reserva_id">Identificador de Reserva: {props.reserva_data.reserva_id}</Col></Row>
        <hr></hr>
        <Row className='ml-2 mt-3'>
            <Col md={6} id="horario"><span>Fecha y hora: </span><span className="valor_campo text-muted">{props.reserva_data.horario}</span></Col>
            <Col md={6} id="direccion"><span>Estado: </span><span className="valor_campo text-muted">{props.reserva_data.activo}</span></Col>
        </Row>
        <Row className='ml-2 mt-2'>
            <Col xs={12}><span className="lugar_disponible">Datos del Garage</span></Col>
            <Col sm={6} id="nombre_garage"><span>Nombre Garage: </span><span className="valor_campo text-muted">{props.reserva_data.nombre_garage}</span></Col>
            <Col sm={6} id="direccion"><span>Dirección: </span><span className="valor_campo text-muted">{props.reserva_data.direccion_garage}</span></Col>
            <Col sm={6} id="telefono"><span>Teléfono: </span><span className="valor_campo text-muted">{props.reserva_data.telefono}</span></Col>
            <Col sm={6} id="nombre_localidad"><span>Localidad: </span><span className="valor_campo text-muted">{props.reserva_data.localidad_garage_texto}</span></Col>
        </Row>
        
{/*         <Row className='mt-3 justify-content-center'>
            {parseInt(props.reserva_data.rol, 10) === 2 &&
                <>
                    <Button variant="primary" onClick={() => setShow(true)}>Modificar Garage</Button>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="main-modal"
                    >
                        <ModificarGaragePage garage_id={props.reserva_data.garage_id} handleClose={handleClose} />
                    </Modal>
                    
                

                    <Link to={{pathname:'/reservascliente', state:{garage_id:props.reserva_data.garage_id}}} 
                    className='search-btn'>
                        <Button className="link_button" variant="primary">Ver reservas Garage</Button>
                    </Link>
                </>
            }
        </Row> */}
    </Col>)
};

export default ReservaContainer;