import React from 'react';
import './Footer.css';
import { Col, Row} from 'react-bootstrap';

function Footers() {
    return (
            <div className='footer'>
            <Row>
                <Col xs={12} md={12}>
                    <p>Copyright @ Laura Munteanu</p>
                </Col>
            </Row>
            </div>
    );
}

export default Footers;