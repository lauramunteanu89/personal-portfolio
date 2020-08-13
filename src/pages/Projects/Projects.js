import React from 'react';
import { Container } from 'react-bootstrap';
import {Row, Image, Col} from 'react-bootstrap';
import workProjects from '../../assets/images/project.jpg';
import pigGame from '../../assets/images/pig.PNG';
import todoApp from '../../assets/images/todoapp.PNG';
import rockPaper from '../../assets/images/rock.PNG';
import healthyLiving from '../../assets/images/living.PNG';
import { Button } from 'react-bootstrap';
import './Projects.css';

function Projects() {
    return(
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <Image className='image' src={workProjects} fluid></Image>
                </Col>
                <Col xs={12} md={4}>
                    <h1>PROJECTS</h1>
                    <p>A collection with some of the projects I've worked on in the recent period of time, during my learning path.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <div className='firstgame'>
                    <Image className='pig' src={pigGame} roundedCircle fluid></Image>
                    <h5>Pig Game</h5>
                    <p>Pig Game is a dice game in which the first who scores 100 or more points, wins. Each turn, you can roll a die until a 1 is rolled (and you lose your turn) or you can hold your current score.</p>
                    <p className='technology'>HTML/CSS/Vanilla JS</p>
                    <Button href='https://github.com/lauramunteanu89/pig-game-javascript' target='_blank' variant="outline-primary">Learn more</Button>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className='secondgame'>
                    <Image className='todo' src={todoApp} roundedCircle fluid></Image>
                    <h5>ToDo List</h5>
                    <p>Todo lists are features widely used in task management to better organize your daily chores, monitor progress and schedule new tasks. Todo lists can be used at work, as well as at home.</p>
                    <p className='technology'>HTML/CSS/Vanilla JS</p>
                        <Button href='https://github.com/lauramunteanu89/todoapp' target='_blank' variant="outline-primary">Learn more</Button>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className='thirdgame'>
                    <Image className='rock' src={rockPaper} roundedCircle fluid></Image>
                    <h5>Rock Paper Scissors</h5>
                    <p>Rock Paper Scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. Some shapes have more power.</p>
                    <p className='technology'>HTML/CSS/React</p>
                        <Button href='https://github.com/lauramunteanu89/rock-paper-scissors' target='_blank' variant="outline-primary">Learn more</Button>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className='fourthgame'>
                    <Image className='healthy' src={healthyLiving} roundedCircle fluid></Image>
                    <h5>Healthy Living Website</h5>
                    <p>Healthy Living is a template for simple and useful websites. It contains 3 pages (homepage, contact page, register) and 3 modules (appointment and login capabilities). </p>
                    <p className='technology'>HTML/CSS/Bootstrap/PHP/Vanilla JS</p>
                        <Button href='https://github.com/lauramunteanu89/ayurvedic-healthy-living' target='_blank' variant="outline-primary">Learn more</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;