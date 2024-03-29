import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import CourseScreen from './screens/CourseScreen'
import CoursesScreen from './screens/CoursesScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import WishListScreen from './screens/WishListScreen'
import CartScreen from './screens/CartScreen'
import CheckoutScreen from './screens/CheckoutScreen'
import NotificationScreen from './screens/NotificationScreen'

import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import CourseListScreen from './screens/CourseListScreen'
import CourseEditScreen from './screens/CourseEditScreen'
import LectureListScreen from './screens/LectureListScreen'
import LectureEditScreen from './screens/LectureEditScreen'

import OrderListScreen from './screens/OrderListScreen'
import OrderScreen from './screens/OrderScreen'
import LectureScreen from './screens/LectureScreen'

import TempScreen from './screens/TempScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-0'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/forgotpassword' component={ForgotPasswordScreen} />
        <Route path='/courses' component={CoursesScreen} />
        <Route path='/coursescreen/:id' component={CourseScreen} />
        <Route path='/wishlist/:id?' component={WishListScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/checkout' component={CheckoutScreen} />
        <Route path='/notification' component={NotificationScreen} />

        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route path='/admin/courselist' component={CourseListScreen} exact />
        <Route path='/admin/course/:id/edit' component={CourseEditScreen} />
        <Route path='/admin/lecturelist' component={LectureListScreen} exact />
        <Route path='/admin/lecture/:id/edit' component={LectureEditScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} exact />
        <Route path='/order/:id' component={OrderScreen} />

        <Route path='/lecture' component={LectureScreen} />
        <Route path='/temp' component={TempScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App