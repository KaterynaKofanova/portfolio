import React from 'react'
import {Container, Row, Col,  Nav} from 'react-bootstrap'
import { SiReact, SiNodeDotJs, SiMongodb, SiGit, SiPython, SiCss3, SiHtml5, SiR, SiJavascript, SiRedux, SiTypescript, SiGraphql} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import Button from '@bit/tabinda.react-button-animation.animated.button';

const Skills= () => {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center" id="skills">
            <Row className="align-items-center justify-content-center text-center my-5">
               <h1>Skills</h1>
            </Row>
            <Row className="align-items-center justify-content-center text-center my-4">
              <Col>
                <SiReact size={50}/><p>React</p>
              </Col>
              <Col>
              <SiNodeDotJs size={50}/> <p>Nodejs</p>
              </Col>
              <Col>
              <SiGraphql size={50}/> <p>GraphQL</p>
              </Col>
              <Col>
              <SiTypescript size={50}/> <p>TypeScript</p>
              </Col>
              <Col>
              <SiRedux size={50}/> <p>Redux</p>
              </Col>
              <Col>
              <SiMongodb size={50}/> <p>MongoDB</p>
              </Col>
              <Col>
              <SiGit size={50}/> <p>Git</p>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center text-center my-4">
              <Col>
              <SiPython size={50}/> <p>Python</p>
              </Col>
              <Col>
              <GrMysql size={50}/> <p>MySQL</p>
              </Col>
              <Col>
              <SiR size={50}/> <p>R</p>
              </Col>
              <Col>
              <SiCss3 size={50}/> <p>CSS</p>
              </Col>
              <Col>
              <SiHtml5 size={50}/> <p>HTML</p>
              </Col>
              <Col>
              <SiJavascript size={50}/> <p>JavaScript</p>
              </Col>
            </Row>
            <Nav.Link href="#projects"><Button label='To the projects'></Button></Nav.Link> 
        </Container>
    )
}

export default Skills