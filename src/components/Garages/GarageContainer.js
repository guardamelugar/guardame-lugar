import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import Map from '../Maps/Map'
import ModificarGaragePage from '../../pages/ModificarGaragePage';
import GuardameLugar from '../Reservas/GuardameLugar'
import MostrarComentarios from '../Calificaciones/MostrarComentarios'
import '../../styles/garagecomp.css'

/* El componente necesita que se le manden estos datos.
garage_data: {
    garage_id: "",
    altura_maxima: "",
    coordenadas: "",
    telefono_garage: "",
    direccion_garage: "",
    localidad_garage: "",
    lugar_autos: "",
    lugar_bicicletas: "",
    lugar_camionetas: "",
    lugar_motos: "",
    nombre_garage: "",
    localidad_garage_texto: "",
    rol = 1 || 2 --> viene de la cookie    
    }

}

    localidad_garage_texto Es el valor asociado al ID de localidad. Ej. Almagro. */

const GarageContainer = (props) => {
    const [show, setShow] = useState(false);
    const [showComentario, setShowComentario] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseComentario = () => setShow(false);

    const promedio = props.garage_data.contador > 0 ?
        (props.garage_data.promedio / props.garage_data.contador).toFixed(2) : 0

    return (<><Col className="mr-md-1 mt-4 garagecomp" xs={11} lg={5} id={props.garage_data.garage_id}
        key={props.garage_data.garage_id}>
        <Row className='ml-1'>
            <Col xs={9} className='nombreGarage' id="nombre_garage">
                {props.garage_data.nombre_garage}
            </Col>
            <Col xs={3} className="text-right">
                <Badge pill variant="primary" className="btn" onClick={() => setShowComentario(true)}>
                    <Row>
                        {promedio > 0 &&
                            <Col xs={12}>
                                <i className="fa fa-star estrella-garage"></i>{' ' + promedio}
                            </Col>}
                        <Col xs={12}>
                            <i className='fas fa-comment'></i>
                            {' ' + props.garage_data.contador}
                        </Col>
                    </Row>
                </Badge>
            </Col>
        </Row>

        <hr></hr>
        <Row className='ml-1 mt-3'>
            <Col md={6} id="telefono_garage"><span>Teléfono: </span><span className="valor_campo text-muted">{props.garage_data.telefono_garage}</span></Col>
            <Col xs={12} xl={6}><span>Localidad: </span><span className="valor_campo text-muted">{props.garage_data.localidad_garage_texto}</span></Col>
            <Col id="localidad_garage" className="localidad">{props.garage_data.localidad_garage}</Col>
        </Row>
        <Row className='ml-1'>
            <Col id="direccion_garage"><span>Dirección: </span><span className="valor_campo text-muted">{props.garage_data.direccion_garage}</span></Col>
        </Row>
        <Row className='ml-1 mt-2'>
            <Col xs={12}><span className="lugar_disponible">Lugares disponibles</span></Col>
            <Col sm={6} id="lugar_autos"><span>Auto: </span><span className="valor_campo text-muted">{props.garage_data.lugar_autos}</span></Col>
            <Col sm={6} id="lugar_bicicleta"><span>Bicicleta: </span><span className="valor_campo text-muted">{props.garage_data.lugar_bicicletas}</span></Col>
            <Col sm={6} id="lugar_camionetas"><span>Camioneta: </span><span className="valor_campo text-muted">{props.garage_data.lugar_camionetas}</span></Col>
            <Col sm={6} id="lugar_motos"><span>Moto: </span><span className="valor_campo text-muted">{props.garage_data.lugar_motos}</span></Col>
        </Row>
        <Row className='ml-1'>
            <Col id="altura_maxima"><span>Altura máxima: </span><span className="valor_campo text-muted">{props.garage_data.altura_maxima}</span></Col>
        </Row>
        <Row className="mt-2 justify-content-center">
            <Map address={props.garage_data.direccion_garage}></Map>
        </Row>
        <Row className='mt-2 justify-content-center'>

            {/* muestra esta porcion solo a los clientes */}
            {parseInt(props.garage_data.rol, 10) === 2 &&
                <>
                    <Col xs={12} lg={6} className='mt-1'>
                        <Button variant="primary" className="btn-block" onClick={() => setShow(true)}>Modificar Garage</Button>
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="main-modal"
                        >
                            <ModificarGaragePage garage_id={props.garage_data.garage_id} handleClose={handleClose} />
                        </Modal>
                    </Col>
                    {/* uso de state en link para pasar garage_id como propiedad a /reservascliente */}
                    <Col xs={12} lg={6} className='mt-1'>
                        <Link to={{ pathname: '/reservascliente', state: { garage_id: props.garage_data.garage_id } }}
                            className='btn btn-block btn-primary'>
                            <span>Ver reservas Garage</span>
                        </Link>
                    </Col>
                </>
            }
            {/* muestra esta porcion solo a los usuarios */}
            {parseInt(props.garage_data.rol, 10) === 1 &&

                <Col xs={12} lg={6} className='mt-1'>
                    <Button variant="primary" className="btn-block" onClick={() => setShow(true)}>Reservar lugar</Button>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="main-modal"
                    >
                        <GuardameLugar garage_id={props.garage_data.garage_id} nombre_garage={props.garage_data.nombre_garage}
                            handleClose={handleClose} />
                    </Modal>
                </Col>
            }
        </Row>
    </Col >
        <Modal
            show={showComentario}
            onHide={() => setShowComentario(false)}
            dialogClassName="main-modal"
            scrollable={true}
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <MostrarComentarios garage_id={props.garage_data.garage_id}
                nombre_garage={props.garage_data.nombre_garage}
                    handleClose={handleCloseComentario} />
            </Modal.Body>
        </Modal>
    </>)
};

export default GarageContainer;