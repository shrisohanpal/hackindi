import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Form, Button, FormControl, Row, Col } from 'react-bootstrap'
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';

//import { listCategorys } from '../actions/categoryActions'

const Header = () =>
{
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() =>
    {
        //  dispatch(listCategorys())
    }, [dispatch])

    return (
        <header>
            <Container>
                <Navbar expand="lg" className='py-0'>
                    <Nav className="m-auto">
                        <LinkContainer to='/' className='py-0 my-0'>
                            <Navbar.Brand>
                                <img alt="Kalpavarikshcart" style={{ width: 180, height: 60 }} src={window.location.origin + "/logo.png"} />
                            </Navbar.Brand>
                        </LinkContainer>
                    </Nav>
                </Navbar>
                <Row>
                    <Col md={9} className='my-2'>
                        <Form inline>
                            <Button className='mx-3' onClick={() => { setDrawerOpen(true) }}>
                                <i className='fas fa-bars' />
                            </Button>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: window.innerWidth > 768 ? '80%' : '55%' }} />
                            <Button>Search</Button>
                        </Form>
                    </Col>
                    <Col md={3} className='my-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <LinkContainer to='/location'>
                            <Nav.Link>
                                <i className='fas fa-map-marker-alt' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={userInfo ? '/profile' : '/login'}>
                            <Nav.Link>
                                <i className='fas fa-user' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/cart'>
                            <Nav.Link>
                                <i className='fas fa-cart-plus' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/store'>
                            <Nav.Link>
                                <i className='fas fa-store-alt' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Drawer anchor='left' open={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
                <List style={{ width: 250 }}>
                    <ListItem>
                        <ListItemText primary={<div style={{ fontWeight: 'bold', fontSize: 20 }}>Kalpavrikshcart</div>} />
                        <Button className='ml-auto' onClick={() => setDrawerOpen(false)}><i className='fas fa-times' /></Button>
                    </ListItem>
                    <Divider />
                    <ListItem />
                </List>
            </Drawer>
        </header >
    )
}

export default Header;