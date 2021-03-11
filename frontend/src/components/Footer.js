import React from 'react'
import { Navbar, Nav, Form, Button, FormControl, Container, Row, Col } from 'react-bootstrap'

const Footer = () =>
{
    return (
        <footer className='py-3'>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Row className='py-3 w-100'>
                        <Col md={4} className='text-center'>
                            <Navbar.Brand href="#">Contact Details</Navbar.Brand><br />
                            <Navbar.Brand href="#">Contact Details</Navbar.Brand><br />
                            <Navbar.Brand href="#">Contact Details</Navbar.Brand><br />
                        </Col>
                        <Col md={4} className='text-center'>
                            <Navbar.Brand href="#">Privacy Policy</Navbar.Brand><br />
                            <Navbar.Brand href="#">Privacy Policy</Navbar.Brand><br />
                            <Navbar.Brand href="#">Privacy Policy</Navbar.Brand><br />
                        </Col>
                        <Col md={4} className='text-center'>
                            <Navbar.Brand href="#">Social Media Links</Navbar.Brand><br />
                            <Navbar.Brand href="#">Social Media Links</Navbar.Brand><br />
                            <Navbar.Brand href="#">Social Media Links</Navbar.Brand><br />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Kalpavrikshcart<br />
                        <a href="https://slanzapanika.com">
                            Design & Developed By: Slanz Apanika
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer