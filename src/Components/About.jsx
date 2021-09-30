import React from 'react'
import { Card , Row ,Col } from 'react-bootstrap';
const About = () => {
    return ( 
        <Row>
            <Col xs={{span:6,offset:3}}>
                <Card bg={'danger'} text={'light bold'} className='mt-4'>
                    <Card.Body className='text-center'>
                        <p>{`github => https://github.com/mahdi-haddadi`}</p>
                        <p>{`linkedin => https://www.linkedin.com/in/mahdi-haddadi-716355221`}</p>
                        <p>{`youtube => https://www.youtube.com/channel/UCO2BTUgus7VdMrSESb3N05A/featured`}</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
     );
}
 
export default About;