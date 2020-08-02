import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import ConvertirFecha from './ConvertirFecha'
import PATCHReserva from './DB Connection/PATCHReserva'
import GETComentariosbyReserva from './DB Connection/GETComentariosbyReserva'
import MostrarComentarios from './MostrarComentarios'
import CrearComentario from './CrearComentario'
import '../styles/garagecomp.css'

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

class ReservaContainer extends React.Component {

    state = {
        ...this.state, comentario: undefined,
        showComentario: false,
        showDejarComentario: false,
    }

    handleCloseComentario = () => {
        this.setState({...this.state, showComentario: false})
    }

    handleOpenComentario = () => {
        this.setState({...this.state, showComentario: true})
    }

    handleCloseDejarComentario = () => {
        this.setState({...this.state, showDejarComentario: false})
    }

    handleOpenDejarComentario = () => {
        this.setState({...this.state, showDejarComentario: true})
    }

    cancel_reserva = {
        reserva_id: this.props.reserva_data.reserva_id, estado: 3,
        changeReservasActivas: this.props.changeReservasActivas
    }

    completar_reserva = {
        reserva_id: this.props.reserva_data.reserva_id, estado: 2,
        changeReservasActivas: this.props.changeReservasActivas
    }

    async componentDidMount() {
        let comentario = undefined;
        if (this.props.reserva_data.estado !== 1) {
            comentario = await GETComentariosbyReserva(this.props.reserva_data.reserva_id)
            this.setState({ ...this.state, comentario: comentario })
        }
    }

    async componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            let comentario = undefined;
            if (this.props.reserva_data.estado !== 1) {
                comentario = await GETComentariosbyReserva(this.props.reserva_data.reserva_id)
                this.setState({ ...this.state, comentario: comentario })
            }
        }
    }

    render() {
        return (<>
            <Col className="mr-md-2 mt-4 reservacomp" xs={10} id={this.props.reserva_data.reserva_id} >
                <Row className='ml-2'><Col className='nombreGarage' id="reserva_id">Identificador de Reserva: {this.props.reserva_data.reserva_id}</Col></Row>
                <hr></hr>
                <Row className='ml-2 mt-3'>
                    <Col xs={12} id="horario"><span>Fecha y hora: </span><span className="valor_campo text-muted">{ConvertirFecha(this.props.reserva_data.horario)}</span></Col>
                    <Col md={6} id="estado"><span>Estado: </span><span className="valor_campo text-muted">{this.props.reserva_data.descripcion_estado}</span></Col>
                    <Col md={6} id="tipo_vehiculo"><span>Vehículo: </span><span className="valor_campo text-muted">{this.props.reserva_data.tipo_vehiculo}</span></Col>
                </Row>
                {this.props.reserva_data.rol === 2 &&
                    <Row className='ml-2 mt-2'>
                        <Col xs={12}><span className="lugar_disponible datos_reserva">DATOS DEL USUARIO</span></Col>
                        <Col xs={12} id="nombre_usuario"><span>Nombre y apellido: </span><span className="valor_campo text-muted">
                            {this.props.reserva_data.nombre_usuario + " " + this.props.reserva_data.apellido_usuario}
                        </span></Col>
                        <Col sm={6} id="direccion"><span>Mail: </span><span className="valor_campo text-muted">{this.props.reserva_data.mail_reserva}</span></Col>
                        <Col sm={6} id="telefono"><span>Teléfono: </span><span className="valor_campo text-muted">{this.props.reserva_data.telefono}</span></Col>
                    </Row>
                }
                <Row className='ml-2 mt-2'>
                    <Col xs={12}><span className="lugar_disponible datos_reserva">DATOS DEL GARAGE</span></Col>
                    <Col sm={6} id="nombre_garage"><span>Nombre Garage: </span><span className="valor_campo text-muted">{this.props.reserva_data.nombre_garage}</span></Col>
                    <Col sm={6} id="nombre_localidad"><span>Localidad: </span><span className="valor_campo text-muted">{this.props.reserva_data.localidad_garage_texto}</span></Col>
                    <Col sm={12} id="direccion"><span>Dirección: </span><span className="valor_campo text-muted">{this.props.reserva_data.direccion_garage}</span></Col>
                    {this.props.reserva_data.rol === 1 &&
                        <Col sm={6} id="telefono"><span>Teléfono: </span><span className="valor_campo text-muted">{this.props.reserva_data.telefono}</span></Col>
                    }
                </Row>
                <Row className='mt-3 text-center justify-content-center'>
                    {parseInt(this.props.reserva_data.estado, 10) === 1 && <Col xs={12} lg={4}>
                        <button className="btn btn-danger btn-block"
                            onClick={() => PATCHReserva(this.cancel_reserva)}>CANCELAR RESERVA</button>
                    </Col>}
                    {parseInt(this.props.reserva_data.estado, 10) === 1 && this.props.reserva_data.rol === 2 && <Col xs={12} lg={4}>
                        <button className="btn btn-success btn-block"
                            onClick={() => PATCHReserva(this.completar_reserva)}>MARCAR COMPLETA</button>
                    </Col>}
                </Row>
                <Row className='mt-3 text-center justify-content-center'>
                    {(parseInt(this.props.reserva_data.estado, 10) === 2
                        || parseInt(this.props.reserva_data.estado, 10) === 3)
                        && this.props.reserva_data.rol === 1
                        && this.state.comentario !== undefined
                        && this.state.comentario.comentario_id === 0
                        && <Col xs={12} lg={4}>
                            <button className="btn btn-primary btn-block"
                                onClick={() => this.handleOpenDejarComentario()}>DEJAR RESEÑA</button>
                        </Col>}

                    {(parseInt(this.props.reserva_data.estado, 10) === 2
                        || parseInt(this.props.reserva_data.estado, 10) === 3)
                        && this.props.reserva_data.rol === 1
                        && this.state.comentario !== undefined
                        && this.state.comentario.comentario_id !== 0
                        && <Col xs={12} lg={4}>
                            <button className="btn btn-primary btn-block"
                                onClick={() => this.handleOpenComentario()}>VER RESEÑA DEJADA</button>
                        </Col>}
                </Row>
            </Col >
            <Modal
                show={this.state.showComentario}
                onHide={() => this.handleCloseComentario()}
                dialogClassName="main-modal"
                scrollable={true}
            >
                <Modal.Header closeButton />
                <Modal.Body>
                    <MostrarComentarios comentario={this.state.comentario}
                        nombre_garage={this.props.reserva_data.nombre_garage}
                        handleClose={this.handleCloseComentario} />
                </Modal.Body>
            </Modal>
            <Modal
                show={this.state.showDejarComentario}
                onHide={() => this.handleCloseDejarComentario()}
                dialogClassName="main-modal"
            >
                <Modal.Body>
                    <CrearComentario
                        nombre_garage={this.props.reserva_data.nombre_garage}
                        reserva_id={this.props.reserva_data.reserva_id}
                        handleClose={this.handleCloseDejarComentario} />
                </Modal.Body>
            </Modal>
        </>)
    }
}

export default ReservaContainer;