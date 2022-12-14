import React from 'react';
import NavFooter from '../components/NavFooter';
import Navigator from '../components/Navigator';
import rick from '../picturs/api-rickandmorthy.png';
import ecommerce from '../picturs/e-commerce.png';
import wheather from '../picturs/wheater-app.png';
import { Card, CardGroup, Container, NavLink } from 'react-bootstrap';
const Portfolio = () => {
  return (
    <Container>
    <Card bg="primary">
      <Card.Header>
        <Navigator />
      </Card.Header>
      <Card.Body>      
        <Card className='aboutme' >
        <h3>Portfolio</h3>
          <CardGroup>
            <NavLink href='https://polite-maamoul-8f220e.netlify.app/'>
            <Card className='cardimg bg-info' style={{ width: '150px' }} >
              <Card.Img variant="top" src={ecommerce} />
              <Card.Text ><h5>E-Commerce</h5></Card.Text>
            </Card>
            </NavLink>
            <NavLink href='https://adorable-sundae-c494df.netlify.app/'>
            <Card className='cardimg bg-info' style={{ width: '150px' }} >
              <Card.Img variant="top" src={rick} />
              <Card.Text><h5>Api Rick And Morthy</h5></Card.Text>
            </Card>
            </NavLink>
            <NavLink href='https://graceful-centaur-4ccb88.netlify.app/'>
            <Card className='cardimg bg-info' style={{ width: '150px' }} >
              <Card.Img variant="top" src={wheather} />
              <Card.Text><h5>wheather App</h5></Card.Text>
            </Card>
            </NavLink>
          </CardGroup>
        </Card>
      </Card.Body>
      <Card.Footer>
        <NavFooter />
      </Card.Footer>
    </Card>
  </Container>
     
    
  );
};

export default Portfolio;