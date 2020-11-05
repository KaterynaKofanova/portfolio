import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin, AiOutlineHome} from 'react-icons/ai'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" fixed='top'>
            <Navbar.Brand href="#main"><AiOutlineHome size={30} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contacts">Contact</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/katerynakofanova/" target="_blank"><AiFillLinkedin size={30}/></Nav.Link>
                    <Nav.Link href="https://github.com/KaterynaKofanova" target="_blank"><AiFillGithub size={30}/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
    )
}

export default Navigation

