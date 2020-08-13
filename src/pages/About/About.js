import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import Image from 'react-bootstrap/Image';
import workExperience from '../../assets/images/experience.jpg';

function AboutPage() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <Image className='image' src={workExperience} fluid></Image>
                </Col>
                <Col xs={12} md={4}>
                    <h1>ABOUT</h1>
                    <p>Motivated and forward thinking, with experience in providing support and guidance to cross-functional
teams. Self-taught and focused on constantly improving my knowledge, I am confident that my over 10 years experience in UX, eCommerce, Marketing, Web Development and Project Management offers valuable resources for multi-disciplinary support.</p>
                </Col>
            </Row>
            <Row>
                <Col className='experience' xs={12} md={12}>
                    <h5>EXPERIENCE</h5>
                    <hr class='horizontal' />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                <div className='first'>
                    <h5>Technical Writer</h5>
                    <p>January 2020 - present, BigBrother Auditing</p>
                    <ul>
                        <li>Plan, develop, organize, write and edit technical and user manuals</li>
                        <li>Run end-to-end testing</li>
                        <li>Report bugs and errors to development teams</li>
                        <li>Establish user stories acceptance criteria and refine stories</li>
                        <li>Translate features into user stories within the team’s backlog</li>
                    </ul>
                </div>
                </Col>
                <Col xs={12} md={4}>
                <div className='second'>
                    <h5>Web Designer</h5>
                    <p>Dec 2017 - Dec 2019, Regal Beloit Corporation</p>
                        <ul>
                            <li>Liaison between business and IT teams</li>
                            <li>Maintain project delivery and estimations using TeamGantt</li>
                            <li>Create roadmaps to emphasize internal stakeholders’ vision for the website</li>
                            <li>Design UX mockups and prototype user flow</li>
                        </ul>
                </div>
                </Col>
                <Col xs={12} md={4}>
                <div className='third'>
                    <h5>Junior Web Designer</h5>
                    <p>Dec 2016 - Nov 2017, Regal Beloit Corporation</p>
                        <ul>
                            <li>Migrate HVAC 3D App to HTML5&CSS3 (Adobe Animate CC)</li>
                            <li>Implement new features or enhancements to the site</li>
                            <li>Conduct user acceptance testing when implementing deployed enhancements</li>
                            <li>Design mockups and prototype user flow</li>
                        </ul>
                </div>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={4}>
                    <div className='second'>    
                    <h5>Website Manager</h5>
                    <p>Feb 2016 - Dec 2016, Taku Art</p>
                        <ul>
                            <li>Manage 2 websites (home&deco, food&nonfood)</li>
                            <li>Monitor traffic analysis on website</li>
                            <li>Develop products description</li>
                            <li>Graphic design for banners, flyers, promotional ads, logo</li>
                        </ul>
                </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className='third'>
                        <h5>Marketing Specialist</h5>
                        <p>May 2015 - Jan 2016, FitLife</p>
                        <ul>
                            <li>Manage fitness equipment ecommerce website</li>
                            <li>Plan, develop and monitor newsletters campaigns</li>
                            <li>Develop AdWords campaigns</li>
                            <li>Plan, develop and monitor newsletters campaigns</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className='fourth'>
                        <h5>Website Administrator</h5>
                        <p>May 2015 - Jan 2016, Magnolia</p>
                        <ul>
                            <li>Manage plants and accessories online shop (custom platform)</li>
                            <li>SEO optimisation</li>
                            <li>Manage social media accounts</li>
                            <li>Create marketing strategies</li>
                            <li>Stock management</li>
                            <li>Organize photo sessions</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='experience' xs={12} md={12}>
                    <h5>EDUCATION</h5>
                    <hr class='horizontal' />
                </Col>
                <Col xs={12} md={12}>
                    <ul>
                        <li>2011 - 2013, Advertising Master's Degree, Faculty of Political, Administrative and Communication Sciences</li>
                        <li>2008 - 2011, Communication & PR, Bachelor's Degree, Faculty of Political, Administrative and Communication Sciences</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage;