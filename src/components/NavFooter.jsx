import React from 'react';
import { Col, Navbar, Row } from 'react-bootstrap';

const NavFooter = () => {
  return (
    <Row>
      <Navbar className='cards' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Col>
          <a href='https://www.linkedin.com/in/omar-vera-a74b71249/'>Linkedin</a>
        </Col>
        <Col>
          <a href='https://github.com/vemoarrozypollo'>Github</a>
        </Col>
        <Col>
          <a href='https://drive.google.com/file/d/1smdOFKLo3qvz1lFHFdbK_nA7K6wpBm_6/view?usp=sharing'>Download My CV</a>
        </Col>
      </Navbar>
    </Row>
  );
};

export default NavFooter;