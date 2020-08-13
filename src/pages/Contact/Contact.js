import React from 'react';
import './Contact.css';
import Image from 'react-bootstrap/Image';
import {Form} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import contactUs from '../../assets/images/getintouch.jpg';

function ContactPage() {
    return (
        <Container>
            <Row>
            <Col xs={12} md={6}>
                <Image src={contactUs} fluid></Image>
            </Col>
            <Col xs={12} md={6}>
                <h1>LET'S GET IN TOUCH</h1>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your email:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Department you'd like to contact:</Form.Label>
                <Form.Control as="select">
                    <option>Select one</option>
                    <option>Human Resources</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Customer Service</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your message:</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
        
            </Col>
            </Row>
            <Row>
                <Col className='visit' xs={12} md={12}>
                    <h5>...or if you are nearby, come visit me:</h5>
                    <p>Aleea Barsei,</p>
                    <p>Nr. 5,</p>
                    <p>Ap. 1,</p>
                    <p>Cluj-Napoca</p>
                    <p>Jud. Cluj</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage;