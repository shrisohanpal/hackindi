import React from 'react'
import { Container } from 'react-bootstrap'
import Message from '../components/Message'

const NotificationScreen = () =>
{
    return (
        <Container className='py-3 my-3'>
            <Message variant='danger'><center>Currently! You have not any notification.</center> </Message>
        </Container>
    )
}

export default NotificationScreen
