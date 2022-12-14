import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import image from '../picturs/myface.jpg';
const CardsBody = () => {
  return (
    <Row className='justify-content-lg-center' variante='fluid'>
      <Col sm={6} lg={4} >
        <Image className='face' src={image} />
      </Col>
      <Col xl={8}>
        <Card className='cardtext'>
          <h4>Front End Developer</h4>
          <p>desarrollador Front End familiarizado con tecnologias como
            Java Script HTML,CSS,REACT.
            me destaco como alguien a quien le encanta resolver problemas
            de programacion y divertise en el proceso de creacion y creatividad
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default CardsBody;