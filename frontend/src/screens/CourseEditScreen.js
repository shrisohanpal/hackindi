import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CircularProgress from '@material-ui/core/CircularProgress'
import FormContainer from '../components/FormContainer'
import { listCourseDetails, updateCourse } from '../actions/courseActions'
import { COURSE_UPDATE_RESET } from '../constants/courseConstants'

const CourseEditScreen = ({ match, history }) =>
{
    const courseId = match.params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [video, setVideo] = useState('')
    const [description, setDescription] = useState('')
    const [mrp, setMrp] = useState(0)
    const [price, setPrice] = useState(0)
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const courseDetails = useSelector((state) => state.courseDetails)
    const { loading, error, course } = courseDetails

    const courseUpdate = useSelector((state) => state.courseUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = courseUpdate

    useEffect(() =>
    {
        if (successUpdate) {
            dispatch({ type: COURSE_UPDATE_RESET })
            history.push('/admin/courselist')
        } else {
            if (!course.name || course._id !== courseId) {
                dispatch(listCourseDetails(courseId))
            } else {
                setName(course.name)
                setImage(course.image)
                setVideo(course.video)
                setDescription(course.description)
                setMrp(course.mrp)
                setPrice(course.price)
            }
        }
    }, [dispatch, history, courseId, course, successUpdate])

    const uploadFileHandler = async (e) =>
    {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const submitHandler = (e) =>
    {
        e.preventDefault()
        dispatch(
            updateCourse({
                _id: courseId,
                name,
                image,
                video,
                description,
                mrp,
                price,
            })
        )
    }

    return (
        <Container>
            <Link to='/admin/courselist' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
                <h2>Edit Course</h2>
                {loadingUpdate && <CircularProgress />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? (
                    <CircularProgress />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter image url'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></Form.Control>
                            <Form.File
                                id='image-file'
                                label='Choose File'
                                custom
                                onChange={uploadFileHandler}
                            ></Form.File>
                            {uploading && <CircularProgress />}
                        </Form.Group>

                        <Form.Group controlId='video'>
                            <Form.Label>Video</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter video url'
                                value={video}
                                onChange={(e) => setVideo(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='mrp'>
                            <Form.Label>Mrp</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter Mrp'
                                value={mrp}
                                onChange={(e) => setMrp(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='price'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>
                            Update
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </Container>
    )
}

export default CourseEditScreen