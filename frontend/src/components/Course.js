import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Course = ({ course }) =>
{
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/coursescreen/${course._id}`}>
                <Card.Img src={course.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/coursescreen/${course._id}`}>
                    <Card.Title as='div'>
                        <strong>{course.name}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Course