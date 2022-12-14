import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import cssimg from '../picturs/css-3-logo.png';
import htmlimg from '../picturs/HTML6_logo.png';
import reactimg from '../picturs/react-logo.png';
import javascript from '../picturs/js2-logo.svg';
import git from '../picturs/git-icon.svg';
import github from '../picturs/github.png';
import NavFooter from '../components/NavFooter';
import Navigator from '../components/Navigator';
const Abilities = () => {
  return (
    <Container>
      <Card bg="primary">
        <Card.Header>
          <Navigator />
        </Card.Header>
        <Card.Body>      
          <Card className='aboutme' >
            <h3>Abilities</h3>
            <CardGroup id='aboutscreen'>
              <Card className='cardimg' style={{ width: '150px' }} >
                <Card.Img variant="top" src={reactimg} />
                <Card.Text><h5>React JS</h5></Card.Text>
              </Card>
              <Card className='cardimg' style={{ width: '150px' }}>
                <Card.Img variant="top" src={htmlimg} />
                <Card.Text><h5>Html 5</h5></Card.Text>
              </Card>
              <Card className='cardimg' style={{ width: '150px' }}>
                <Card.Img variant="top" src={cssimg} />
                <Card.Text><h5>Css 3</h5></Card.Text>
              </Card>
              <Card className='cardimg' style={{ width: '150px' }}>
                <Card.Img variant="top" src={javascript} />
                <Card.Text><h5>JavaScript</h5></Card.Text>
              </Card>
              <Card className='cardimg' style={{ width: '150px' }}>
                <Card.Img variant="top" src={git} />
                <Card.Text><h5>Git</h5></Card.Text>
              </Card>
              <Card className='cardimg' style={{ width: '150px' }}>
                <Card.Img variant="top" src={github} />
                <Card.Text><h5>GitHub</h5></Card.Text>
              </Card>
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

export default Abilities;