import React from 'react'
import {Container, Row, Nav} from 'react-bootstrap'
import Button from '@bit/tabinda.react-button-animation.animated.button';

const About = () => {
    return (
        <Container fluid className="d-flex vh-100 justify-content-center align-items-center" id="about">
            <Row className="align-items-center justify-content-center text-center my-5">
             <h1>About me</h1>
             </Row>
             <Row className="align-items-center justify-content-center text-center my-3">
             <p className="text-white-75 font-weight-light mb-5 w-75">I have a M.Sc in Business Administration and Economics from Hanken School of Economics with a Finance major. During my studies I got interested in data analytics, but later I have also developed passion for web development. I have obtained most of my skills from the Helsinki University Fullstack-Mooc course and through the creation of personal projects.</p>
             </Row>
             <Nav.Link href="#skills"><Button label='To the skills'></Button></Nav.Link> 
        </Container>
    )
}

export default About