import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap'
import Course from '../components/Course'
import Message from '../components/Message'
import CircularProgress from '@material-ui/core/CircularProgress'
import { listCourses } from '../actions/courseActions'
import OwlCarousel from 'react-owl-carousel';

const HomeScreen = () =>
{
    const dispatch = useDispatch()

    const courseList = useSelector((state) => state.courseList)
    const { loading, error, courses } = courseList

    useEffect(() =>
    {
        dispatch(listCourses())
    }, [dispatch])

    return (
        <>
            <Carousel pause='hover' style={{ margin: 0, display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', paddingTop: 0 }}>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: window.innerWidth < 780 ? 150 : 300 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src={'/images/banners/a.jpg'}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: window.innerWidth < 780 ? 150 : 300 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src={'/images/banners/b.jpg'}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: window.innerWidth < 780 ? 150 : 300 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src={'/images/banners/c.jpg'}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
            <Container className='py-3 my-3'>
                <h2 className='text-center '>Why Our Courses Are Best?</h2>
                <center>You Will Find Practical Knowledge about Hacking In Our Courses. Our all Courses are in Hindi So If You Don't Know English Don't Worry.</center>
                <hr />
                <Row className='text-center py-3 my-3'>
                    <Col md={4}>
                        <h3 >Practical</h3>
                        <Image style={{ width: 300 }} src={'/images/banners/ba.jpg'} />
                        <p>Ethical Hacking is based on hacking So We Had Cover all Practical Tutorial.</p>
                    </Col>
                    <Col md={4}>
                        <h3 >Hindi</h3>
                        <Image style={{ width: 300 }} src={'/images/banners/ba.jpg'} />
                        <p>Our all Courses are in Hindi, So If you don't understand English Don't Worry.</p>
                    </Col>
                    <Col md={4}>
                        <h3 >Cheap</h3>
                        <Image style={{ width: 300 }} src={'/images/banners/ba.jpg'} />
                        <p>You Can Learn hacking in cheap rate you can compare it...</p>
                    </Col>
                </Row>
                <h3 className='my-2'>Our Courses</h3>
                {loading ? (<CircularProgress />)
                    : error
                        ? (<Message variant='danger'>{error}</Message>)
                        : (<OwlCarousel items={window.innerWidth > 780 ? 4 : 2}
                            className="owl-theme"
                            loop
                            nav
                            margin={8} autoplay={true} autoplayTimeout={2000}>
                            {courses.map((course) => (
                                <div key={course._id}>
                                    <Course course={course} />
                                </div>
                            ))}
                        </OwlCarousel>
                        )
                }
            </Container>
        </>
    )
}

export default HomeScreen
