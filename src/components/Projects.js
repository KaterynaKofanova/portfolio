import React from 'react'
import {Container, Row, Col, Card, Nav} from 'react-bootstrap'
import tictactoe from "../images/TicTacToe.png"
import calculator from '../images/Calculator.png'
import Button from '@bit/tabinda.react-button-animation.animated.button';

const Projects = () => {
    return (
        <Container fluid className="d-flex vh-100 justify-content-end align-items-center " id="projects">
            <Row className="align-items-center justify-content-center text-center my-0">
             <h1>Projects</h1>
             </Row>
             <div className="card-deck align-items-center justify-content-center text-center my-4">
               
               <Card style={{ width: '18rem' }}>
                 <Card.Img  fluid variant="top" src={tictactoe} />
                 <Card.Body>
                   <Card.Title>TicTacToe Game</Card.Title>
                   <Card.Link href="https://katerynakofanova.github.io/tic-tac-toe/" target="_blank">Live Demo</Card.Link>
                   <Card.Link href="https://github.com/KaterynaKofanova/tic-tac-toe" target="_blank">See on GitHub</Card.Link>
                </Card.Body>
               </Card>
               
               <Card  style={{ width: '18rem' }}>
                 <Card.Img fluid variant="top" src={calculator}/>
                 <Card.Body>
                   <Card.Title>Calculator</Card.Title>
                   <Card.Link href="https://katerynakofanova.github.io/calculator/" target="_blank">Live Demo</Card.Link>
                   <Card.Link href="https://github.com/KaterynaKofanova/calculator" target="_blank">See on GitHub</Card.Link>
                </Card.Body>
               </Card>
             </div>
             <Nav.Link href="#contacts"><Button label='Contact me'></Button></Nav.Link> 
        </Container>
    )
}

export default Projects