import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Form, Button, FormControl, Row, Col } from 'react-bootstrap'
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';

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
                <Navbar expand="lg" className='my-0 py-0' >
                    <Nav className="m-auto">
                        <LinkContainer to='/'>
                            <Navbar.Brand>
                                <h1>Hackindi</h1>
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
                            <LinkContainer to='/courses'>
                                <Button>Search</Button>
                            </LinkContainer>
                        </Form>
                    </Col>
                    <Col md={3} className='my-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <LinkContainer to='/courses'>
                            <Nav.Link>
                                <i className='fas fa-layer-group' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/wishlist'>
                            <Nav.Link>
                                <i className='far fa-heart' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/cart'>
                            <Nav.Link>
                                <i className='fas fa-cart-plus' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/notification'>
                            <Nav.Link>
                                <i className='far fa-bell' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={userInfo ? '/profile' : '/login'}>
                            <Nav.Link>
                                <i className='far fa-user' style={{ fontSize: 30 }}></i>
                            </Nav.Link>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Drawer anchor='left' open={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
                <List style={{ width: 250 }}>
                    <ListItem>
                        <ListItemText primary={<div style={{ fontWeight: 'bold', fontSize: 20 }}>Hackindi</div>} />
                        <Button className='ml-auto' onClick={() => setDrawerOpen(false)}><i className='fas fa-times' /></Button>
                    </ListItem>
                    <Divider />
                    {
                        userInfo && userInfo.isAdmin && (
                            <>
                                <ListItem>
                                    <ListItemText primary={<div style={{ fontWeight: 'bold', fontSize: 20 }}>Admin Options</div>} />
                                </ListItem>
                                <ListItem button>
                                    <LinkContainer to='/admin/userlist'>
                                        <ListItemText primary="Users List" />
                                    </LinkContainer>
                                </ListItem>
                                <ListItem button>
                                    <LinkContainer to='/admin/courselist'>
                                        <ListItemText primary="Courses" />
                                    </LinkContainer>
                                </ListItem>
                                <ListItem button>
                                    <LinkContainer to='/admin/lecturelist'>
                                        <ListItemText primary="Lectures" />
                                    </LinkContainer>
                                </ListItem>
                                <ListItem button>
                                    <LinkContainer to='/admin/orderlist'>
                                        <ListItemText primary="Orders" />
                                    </LinkContainer>
                                </ListItem>
                                <Divider />
                            </>
                        )
                    }
                    <ListItem>
                        <LinkContainer to='/courses' className='w-100 p-0 m-0'>
                            <Nav.Link>
                                <Button className='btn-block'>
                                    All Courses <i className='fas fa-layer-group px-3 mx-3' />
                                </Button>
                            </Nav.Link>
                        </LinkContainer>
                    </ListItem>
                    <ListItem>
                        <LinkContainer to='/wishlist' className='w-100 p-0 m-0'>
                            <Nav.Link>
                                <Button className='btn-block'>
                                    WishList <i className='far fa-heart px-3 mx-3' />
                                </Button>
                            </Nav.Link>
                        </LinkContainer>
                    </ListItem>
                    <ListItem>
                        <LinkContainer to='/cart' className='w-100 p-0 m-0'>
                            <Nav.Link>
                                <Button className='btn-block'>
                                    Cart <i className='fas fa-cart-plus px-3 mx-3' />
                                </Button>
                            </Nav.Link>
                        </LinkContainer>
                    </ListItem>
                    <ListItem>
                        <LinkContainer to='/notification' className='w-100 p-0 m-0'>
                            <Nav.Link>
                                <Button className='btn-block'>
                                    Notifications <i className='far fa-bell px-3 mx-3' />
                                </Button>
                            </Nav.Link>
                        </LinkContainer>
                    </ListItem>
                    {userInfo ? (
                        <ListItem>
                            <LinkContainer to='/profile' className='w-100 p-0 m-0'>
                                <Nav.Link>
                                    <Button className='btn-block'>
                                        Profile <i className='far fa-user px-3 mx-3' />
                                    </Button>
                                </Nav.Link>
                            </LinkContainer>
                        </ListItem>
                    ) : (
                        <>
                            <ListItem>
                                <LinkContainer to='/login' className='w-100 p-0 m-0'>
                                    <Nav.Link>
                                        <Button className='btn-block'>
                                            Login <i className='far fa-user px-3 mx-3' />
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                            </ListItem>
                            <ListItem>
                                <LinkContainer to='/register' className='w-100 p-0 m-0'>
                                    <Nav.Link>
                                        <Button className='btn-block'>
                                            Register <i className='far fa-user px-3 mx-3' />
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                            </ListItem>
                        </>
                    )}
                    <Divider />
                    <ListItem />

                </List>
            </Drawer>
        </header >
    )
}

export default Header;