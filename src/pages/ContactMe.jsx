import React, { useRef, useState } from 'react';
import { Button, Card, CardGroup, Container, Form, InputGroup } from 'react-bootstrap';
import NavFooter from '../components/NavFooter';
import Navigator from '../components/Navigator';
import emailjs from '@emailjs/browser';

const Result=()=>{
  return(
    <p>Your message has been successfully sent. I will contact you soon</p>
  )
};
const ContactMe = () => {

  const [result, showResult]= useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4u80xpt', 'template_8202itr', form.current, 'y7HILcpAYVMWYvDBO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };
  setTimeout(() => {
showResult(false);
  },5000)

  return (
    <Container>
      <Card bg="primary">
        <Card.Header>
          <Navigator />
        </Card.Header>
        <Card.Body>
          <Card className='contact'>
            <h3>Contact Me</h3>
            <CardGroup>
              <Card className='cardimg'>
                <Form  ref={form} onSubmit={sendEmail}>
                  <Form.Group controlId="fullName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control style={{ width: '400px' }} name='fullName' size='sm' type="text"
                      placeholder="Full name" />
                  </Form.Group>
                  <Form.Group  controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' size='sm' type="email"
                      placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group  controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control name='subject' size='sm' type="text"
                      placeholder="Subject" />
                  </Form.Group>
                  <Form.Group  controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control name='message' size='sm' as="textarea" rows={2}/>
                  </Form.Group>
                  <Button className="mb-2" variant="success" type="submit">
                    Submit
                  </Button>
                  <Form.Label>{result ? <Result/>: null }</Form.Label>
                </Form>
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

export default ContactMe;
