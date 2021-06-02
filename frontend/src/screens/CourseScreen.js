import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import CircularProgress from '@material-ui/core/CircularProgress'
import Meta from '../components/Meta'
import {
listCourseDetails,
createCourseReview,
} from '../actions/courseActions'
import { COURSE_CREATE_REVIEW_RESET } from '../constants/courseConstants'

const CourseScreen = ({ history, match }) => {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const courseDetails = useSelector((state) => state.courseDetails)
    const { loading, error, course } = courseDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const courseReviewCreate = useSelector((state) => state.courseReviewCreate)
    const {
        success: successCourseReview,
        loading: loadingCourseReview,
        error: errorCourseReview,
    } = courseReviewCreate

    useEffect(() => {
        if (successCourseReview) {
            setRating(0)
            setComment('')
        }
        if (!course._id || course._id !== match.params.id) {
            dispatch(listCourseDetails(match.params.id))
            dispatch({ type: COURSE_CREATE_REVIEW_RESET })
        }
    }, [dispatch, match, successCourseReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}`)
    }
    const enrollHandler = () => {
        history.push(`/cart/${match.params.id}`)
    }
    const addToWishListHandler = () => {
        history.push(`/cart/${match.params.id}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createCourseReview(match.params.id, {
                rating,
                comment,
            })
        )
    }

    return (
        <Container>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Meta title={course.name} />
                    <Row>
                        <Col md={6}>
                            <Image src={course.image} alt={course.name} fluid />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{course.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating
                                        value={course.rating}
                                        text={`${course.numReviews} reviews`}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>Price: R {course.price}</ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {course.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <div>Video</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>₹ {course.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                {course.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Button
                                            onClick={addToCartHandler}
                                            className='btn-block'
                                            type='button'>
                                            Add To Cart
                                        </Button>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button
                                            onClick={enrollHandler}
                                            className='btn-block'
                                            type='button'>
                                            Enroll Now
                                        </Button>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button
                                            onClick={addToWishListHandler}
                                            className='btn-block'
                                            type='button'>
                                            Add To WishList
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    )
}

export default CourseScreen