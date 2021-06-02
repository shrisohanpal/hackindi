import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CircularProgress from '@material-ui/core/CircularProgress'
import { listCourses, deleteCourse, createCourse } from '../actions/courseActions'
import { COURSE_CREATE_RESET } from '../constants/courseConstants'

const CourseListScreen = ({ history, match }) =>
{
    const dispatch = useDispatch()

    const courseList = useSelector((state) => state.courseList)
    const { loading, error, courses } = courseList

    const courseDelete = useSelector((state) => state.courseDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = courseDelete

    const courseCreate = useSelector((state) => state.courseCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        course: createdCourse,
    } = courseCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() =>
    {
        dispatch({ type: COURSE_CREATE_RESET })

        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }

        if (successCreate) {
            history.push(`/admin/course/${createdCourse._id}/edit`)
        } else {
            dispatch(listCourses())
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdCourse
    ])

    const deleteHandler = (id) =>
    {
        if (window.confirm('Are you sure')) {
            dispatch(deleteCourse(id))
        }
    }

    const createCourseHandler = () =>
    {
        dispatch(createCourse())
    }

    return (
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <h2>Courses</h2>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createCourseHandler}>
                        <i className='fas fa-plus'></i> Create Course
                    </Button>
                </Col>
            </Row>
            {loadingDelete && <CircularProgress />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loadingCreate && <CircularProgress />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>MRP</th>
                                <th>PRICE</th>
                                <th>DISCOUNT</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course._id}>
                                    <td>{course._id}</td>
                                    <td>{course.name}</td>
                                    <td>Rs: {course.mrp}</td>
                                    <td>Rs: {course.price}</td>
                                    <td>{parseInt(course.discount)} %</td>
                                    <td>
                                        <LinkContainer to={`/admin/course/${course._id}/edit`}>
                                            <Button variant='light' className='btn-sm'>
                                                <i className='fas fa-edit'></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant='danger'
                                            className='btn-sm'
                                            onClick={() => deleteHandler(course._id)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </Container>
    )
}

export default CourseListScreen
