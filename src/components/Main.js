import React from 'react'
import {Container, Row, Nav} from 'react-bootstrap'
import Button from '@bit/tabinda.react-button-animation.animated.button';




const Main = () => {
    
    return (
        <Container fluid className="d-flex vh-100 justify-content-center align-items-center" id="main">
            <Row className="align-items-center justify-content-center text-center my-5">
             <h1>WELCOME TO MY PORTFOLIO</h1>
             </Row>
             <Row className="align-items-center justify-content-center text-center my-3">
             <h3>Kateryna Kofanova</h3>
             </Row>
             <Row className="align-items-center justify-content-center text-center my-3">
             <p className="text-white-75 font-weight-light mb-5" style={{fontSize: 20}}>Here you can find my projects that showcase my skills. Please take a look and enjoy!</p>
             </Row>
             <Nav.Link href="#about"><Button label='Find out more'></Button></Nav.Link> 
        </Container>
    )
}

export default Main