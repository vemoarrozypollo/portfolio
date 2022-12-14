import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardsBody from '../components/CardsBody';
import NavFooter from '../components/NavFooter';
import Navigator from '../components/Navigator';


const Home = () => {
  return (
    <Container className='container' id='screen' >
      <Card bg="primary">
        <Card.Header>
          <Navigator />
        </Card.Header>
        <Card.Body >
          <Row className='justify-content-md-center' >
            <Col xl={10} lg={12}>
              <CardsBody />
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <NavFooter />
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Home;
