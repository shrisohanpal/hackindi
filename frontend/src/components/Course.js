import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Course = ({ course }) =>
{
    return (
        <Card className='my-3 p-3 rounded' style={{ minHeight: 300 }}>
            <Link to={`/coursescreen/${course._id}`}>
                <Card.Img src={course.image} variant='top' style={{ height: 150 }} />
                <Card.Body className='py-0 my-0'>
                    <Card.Title as='div'>
                        <strong>{course.name}</strong>
                    </Card.Title>
                    <Card.Text as='div'>
                        <Rating
                            value={course.rating}
                            text={`${course.numReviews}`}
                        />
                    </Card.Text>
                    {course.price === 0
                        ? <Card.Text as='h3' style={{ color: 'red' }}>Free Course</Card.Text>
                        : <Card.Text as='h5'><strong>₹{course.price}</strong> <strike style={{ color: 'red' }}>₹{course.mrp}</strike></Card.Text>
                    }
                </Card.Body>
            </Link>
        </Card>
    )
}

export default Course