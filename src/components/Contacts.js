import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Contacts= () => {
    return (
        <Container fluid className="d-flex vh-100 justify-content-center align-items-center" id="contacts">
            <Row className="align-items-center justify-content-center text-center my-5">
               <h1>Get in touch with me</h1>
            </Row>
            <Row className="align-items-center justify-content-center text-center my-5">
                <Col className="align-items-center justify-content-center text-center my-5">
                <a href="https://www.linkedin.com/in/katerynakofanova/" target="_blank"><AiFillLinkedin size={80} color="black"/></a>
                </Col>
                <Col className="align-items-center justify-content-center text-center my-5">
                <a href="https://github.com/KaterynaKofanova" target="_blank"><AiFillGithub size={80} color="black"/></a>
                </Col>
            </Row>
        </Container>
    )}

export default Contacts