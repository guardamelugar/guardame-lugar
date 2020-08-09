import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ReactStars from "react-rating-stars-component";

const Estrellas = (props) => {
  const calificacion = {
    size: 20,
    count: 5,
    color: "white",
    activeColor: "yellow",
    value: 0,
    a11y: false,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      props.onChangeCal(newValue)
    }
  };

  return (
    <Row>
      <Col>
        <ReactStars {...calificacion} />
      </Col>
    </Row>
  )
}

export default Estrellas