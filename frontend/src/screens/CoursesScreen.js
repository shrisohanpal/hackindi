import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress'
import Course from '../components/Course'
import Message from '../components/Message'
import Meta from '../components/Meta'
import { listCourses } from '../actions/courseActions'

const CoursesScreen = ({ match, history }) =>
{
    const keyword = match.params.keyword
    const dispatch = useDispatch()

    const courseList = useSelector(state => state.courseList)
    const { loading, error, courses } = courseList

    useEffect(() =>
    {
        dispatch(listCourses(keyword))
    }, [dispatch, keyword])

    return (
        <Container>
            <Meta />
            <Button className='btn btn-light' onClick={() => history.goBack()}>Go Back</Button>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        {courses.map((course) => (
                            <Col key={course._id} sm={12} md={6} lg={4} xl={3}>
                                <Course course={course} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </Container>
    )
}

export default CoursesScreen
