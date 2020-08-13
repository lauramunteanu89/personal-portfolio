import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import laptopGirl from '../../assets/images/laptop-girl.jpg';
import './Home.css';

function Home() {
    return (
        <React.Fragment>
                <Container>
                    <Row>
                        <Col xs={12} md={9}>
                        <Image src={laptopGirl} fluid></Image>
                        </Col>
                        <Col className='blurb' xs={12} md={3}>
                    <h1 class='highlight'>LAURA MUNTEANU</h1>
                        <p>
                            Creative, fascinated about organizational stuff and shaping people, I like supporting everyone in their career path and work experience.
                        </p>
                    </Col>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            {/* </Jumbotron> */}
            <Container>
                <Row>
                    <Col className='about' xs={12} md={4}>
                        <p>Motivated and forward thinking, with experience in providing support and guidance to cross-functional teams.</p>
                        <Button href='/About' variant="outline-primary">More about me</Button>
                    </Col>
                    <Col className='projects' xs={12} md={4}>
                        <p>A collection with some of the projects I've worked on in the recent period of time, during my learning path.</p>
                        <Button href='/Projects' variant="outline-primary">View my projects</Button>
                    </Col>
                    <Col className='contact' xs={12} md={4}>
                        <p>Feel free to contact me for any inquiry or if you are interested in acollaborating on a future project.</p>
                        <Button href='/Contact' variant="outline-primary">Get in touch</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
// we can have only onde default export
export default Home;