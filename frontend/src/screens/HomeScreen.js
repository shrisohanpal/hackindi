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

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const courseList = useSelector((state) => state.courseList)
    const { loading, error, courses } = courseList

    useEffect(() =>
    {
        dispatch(listCourses())
    }, [dispatch])

    return (
        <div className='text-center'>
            {/** Section 1 */}
            {userInfo && <>
                <h4>Hi <strong>{userInfo.name.split(' ')[0]}</strong>, Let's start learning !!!</h4>
            </>}
            <Carousel pause='hover' style={{ margin: 0, display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', paddingTop: 0 }}>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: window.innerWidth < 780 ? 150 : 400 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src={'/images/banners/aa.png'}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: window.innerWidth < 780 ? 150 : 400 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src={'/images/banners/ab.png'}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: window.innerWidth < 780 ? 150 : 400 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src={'/images/banners/ac.png'}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

            <Container className='py-3 my-3'>

                {/** Section 2 */}
                <h2 className='text-center '>Why Our Courses Are Best?</h2>
                <center>You Will Find Practical Knowledge about Hacking In Our Courses. Our all Courses are in Hindi So If You Don't Know English Don't Worry.</center>
                <hr />
                <Row className='text-center py-3 my-3'>
                    <Col md={4}>
                        <h3 >Practical</h3>
                        <i className='fas fa-desktop' style={{ fontSize: 150 }}></i>
                        <p>Ethical Hacking is based on hacking So We Had Cover all Practical Tutorial.</p>
                    </Col>
                    <Col md={4}>
                        <h3 >Hindi</h3>
                        <i className='fas fa-language' style={{ fontSize: 150 }}></i>
                        <p>Our all Courses are in Hindi, So If you don't understand English Don't Worry.</p>
                    </Col>
                    <Col md={4}>
                        <h3 >Cheap</h3>
                        <i className='fas fa-rupee-sign' style={{ fontSize: 150 }}></i>
                        <p>You Can Learn hacking in cheap rate you can compare it...</p>
                    </Col>
                </Row>

                {/*      Section  3           */}
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

                {/**   Section 4   */}
                <h2 className='text-center '>What Our Students Say?</h2>
                <hr />
                <Row className='text-center py-3 my-3'>
                    <Col md={4}>
                        <h3 >Student 1</h3>
                        <Image style={{ width: 160, height: 160, borderRadius: 80 }} src={'/images/students/a.jpg'} />
                        <p>Ethical Hacking is based on hacking So We Had Cover all Practical Tutorial.</p>
                    </Col>
                    <Col md={4}>
                        <h3 >Student 2</h3>
                        <Image style={{ width: 160, height: 160, borderRadius: 80 }} src={'/images/students/b.jpg'} />
                        <p>Ethical Hacking is based on hacking So We Had Cover all Practical Tutorial.</p>
                    </Col>
                    <Col md={4}>
                        <h3 >Student 3</h3>
                        <Image style={{ width: 160, height: 160, borderRadius: 80 }} src={'/images/students/c.jpg'} />
                        <p>Ethical Hacking is based on hacking So We Had Cover all Practical Tutorial.</p>
                    </Col>
                </Row>
            </Container>

            {/**   Section 5   */}
            <h2>Free Course</h2>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: 50, height: window.innerWidth < 780 ? 150 : 400 }} >
                <Image
                    style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                    src={'/images/banners/free.png'} fluid />
            </div>
            {/** Section 6 */}
            <h2>Current Offers</h2>
            <Carousel pause='hover' style={{ margin: 0, display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', paddingTop: 0 }}>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: window.innerWidth < 780 ? 150 : 400 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src={'/images/banners/ba.png'}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: window.innerWidth < 780 ? 150 : 400 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src={'/images/banners/bb.png'}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: window.innerWidth < 780 ? 150 : 400 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src={'/images/banners/bc.png'}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeScreen
