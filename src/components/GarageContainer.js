import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../styles/garagecomp.css'
import ModificarGaragePage from '../pages/ModificarGaragePage';

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

    return (<Col className="mr-2 garagecomp" lg={5} id={props.garage_data.garage_id}>
        <Row className='ml-2'><Col className='nombreGarage' id="nombre_garage">{props.garage_data.nombre_garage}</Col></Row>
        <Row className='ml-2 mt-3'>
            <Col md={6} id="telefono_garage"><span>Teléfono: </span><span className="valor_campo text-muted">{props.garage_data.telefono_garage}</span></Col>
            <Col md={6}><span>Localidad: </span><span className="valor_campo text-muted">{props.garage_data.localidad_garage_texto}</span></Col>
            <Col id="localidad_garage" className="localidad">{props.garage_data.localidad_garage}</Col>
        </Row>
        <Row className='ml-2'>
            <Col id="direccion_garage"><span>Dirección: </span><span className="valor_campo text-muted">{props.garage_data.direccion_garage}</span></Col>
        </Row>
        <Row className='ml-2 mt-2'>
            <Col xs={12}><span className="lugar_disponible">Lugares disponibles</span></Col>
            <Col sm={6} id="lugar_autos"><span>Auto: </span><span className="valor_campo text-muted">{props.garage_data.lugar_autos}</span></Col>
            <Col sm={6} id="lugar_bicicleta"><span>Bicicleta: </span><span className="valor_campo text-muted">{props.garage_data.lugar_bicicletas}</span></Col>
            <Col sm={6} id="lugar_camionetas"><span>Camioneta: </span><span className="valor_campo text-muted">{props.garage_data.lugar_camionetas}</span></Col>
            <Col sm={6} id="lugar_motos"><span>Moto: </span><span className="valor_campo text-muted">{props.garage_data.lugar_motos}</span></Col>
        </Row>
        <Row className='ml-2'>
            <Col id="altura_maxima"><span>Altura máxima: </span><span className="valor_campo text-muted">{props.garage_data.altura_maxima}</span></Col>
        </Row>
        <Row className='mt-3 justify-content-center'>
            {parseInt(props.garage_data.rol,10) === 2 &&
            <>
            <Button variant="primary" onClick={() => setShow(true)}>Modificar Garage</Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="main-modal"
            >
                <ModificarGaragePage garage_id={props.garage_data.garage_id} handleClose={handleClose}/>
            </Modal>
            </>
            }
        </Row>
    </Col>)
};

/* const garage_data = {
    garage_id: "2",
    altura_maxima: "999",
    coordenadas: "999",
    telefono_garage: "55555555",
    direccion_garage: "San Pedrito 269",
    localidad_garage: "12",
    lugar_autos: "77",
    lugar_bicicletas: "78",
    lugar_camionetas: "79",
    lugar_motos: "80",
    nombre_garage: "Garage de prueba PUT",
  } */

export default GarageContainer;