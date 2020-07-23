import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import ModificarGaragePage from '../pages/ModificarGaragePage';
import GuardameLugar from './GuardameLugar'
import '../styles/garagecomp.css'

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

    const handleClose = () => setShow(false);

    const promedio = props.garage_data.contador > 0 ? props.garage_data.promedio / props.garage_data.contador : 0

    return (<Col className="mr-md-2 mt-4 garagecomp" xs={11} lg={5} id={props.garage_data.garage_id}>
        <Row className='ml-1'>
            <Col xs={9} className='nombreGarage' id="nombre_garage">
                {props.garage_data.nombre_garage}
            </Col>
            <Col xs={3} className="text-right">
                <Badge pill variant="primary" className="btn">
                    <Row>
                        {promedio > 0 &&
                            <Col xs={12}>
                                <i className="fa fa-star estrella-garage"></i>{promedio}
                            </Col>}
                        <Col xs={12}>
                            <i class='fas fa-comment'></i>
                            {' ' + props.garage_data.contador}
                        </Col>
                    </Row>
                </Badge>
            </Col>
        </Row>

        <hr></hr>
        <Row className='ml-1 mt-3'>
            <Col md={6} id="telefono_garage"><span>Teléfono: </span><span className="valor_campo text-muted">{props.garage_data.telefono_garage}</span></Col>
            <Col md={6}><span>Localidad: </span><span className="valor_campo text-muted">{props.garage_data.localidad_garage_texto}</span></Col>
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
        <Row className='mt-3 justify-content-center'>

            {parseInt(props.garage_data.rol, 10) === 2 &&
                <>
                    <Button variant="primary" onClick={() => setShow(true)}>Modificar Garage</Button>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="main-modal"
                    >
                        <ModificarGaragePage garage_id={props.garage_data.garage_id} handleClose={handleClose} />
                    </Modal>

                    {/* uso de state en link para pasar garage_id como propiedad a /reservascliente */}

                    <Link to={{ pathname: '/reservascliente', state: { garage_id: props.garage_data.garage_id } }}
                        className='search-btn'>
                        <Button className="link_button" variant="primary">Ver reservas Garage</Button>
                    </Link>
                </>
            }

            {parseInt(props.garage_data.rol, 10) === 1 &&
                <>
                    <Button variant="primary" onClick={() => setShow(true)}>Reservar lugar</Button>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="main-modal"
                    >
                        <GuardameLugar garage_id={props.garage_data.garage_id} nombre_garage={props.garage_data.nombre_garage}
                            handleClose={handleClose} />
                    </Modal>
                </>
            }
        </Row>
    </Col >)
};

export default GarageContainer;