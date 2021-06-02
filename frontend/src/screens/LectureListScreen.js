import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CircularProgress from '@material-ui/core/CircularProgress'
import { listLectures, deleteLecture, createLecture } from '../actions/lectureActions'
import { LECTURE_CREATE_RESET } from '../constants/lectureConstants'

const LectureListScreen = ({ history, match }) =>
{
    const dispatch = useDispatch()

    const lectureList = useSelector((state) => state.lectureList)
    const { loading, error, lectures } = lectureList

    const lectureDelete = useSelector((state) => state.lectureDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = lectureDelete

    const lectureCreate = useSelector((state) => state.lectureCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        lecture: createdLecture,
    } = lectureCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() =>
    {
        dispatch({ type: LECTURE_CREATE_RESET })

        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }

        if (successCreate) {
            history.push(`/admin/lecture/${createdLecture._id}/edit`)
        } else {
            dispatch(listLectures())
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdLecture
    ])

    const deleteHandler = (id) =>
    {
        if (window.confirm('Are you sure')) {
            dispatch(deleteLecture(id))
        }
    }

    const createLectureHandler = () =>
    {
        dispatch(createdLecture())
    }

    return (
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <h2>Lectures</h2>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createLectureHandler}>
                        <i className='fas fa-plus'></i> Create Lecture
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
                                <th>PRICE</th>
                                <th>CATEGORY</th>
                                <th>BRAND</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lectures.map((lecture) => (
                                <tr key={lecture._id}>
                                    <td>{lecture._id}</td>
                                    <td>{lecture.name}</td>
                                    <td>Rs: {lecture.price}</td>
                                    <td>{lecture.category}</td>
                                    <td>{lecture.brand}</td>
                                    <td>
                                        <LinkContainer to={`/admin/lecture/${lecture._id}/edit`}>
                                            <Button variant='light' className='btn-sm'>
                                                <i className='fas fa-edit'></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant='danger'
                                            className='btn-sm'
                                            onClick={() => deleteHandler(lecture._id)}
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

export default LectureListScreen
