import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import
{
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userForgotPasswordReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers'

import
{
    courseListReducer,
    courseDetailsReducer,
    courseDeleteReducer,
    courseCreateReducer,
    courseUpdateReducer,
    courseReviewCreateReducer,
} from './reducers/courseReducers'

import
{
    lectureListReducer,
    lectureDetailsReducer,
    lectureDeleteReducer,
    lectureCreateReducer,
    lectureUpdateReducer,
    lectureReviewCreateReducer,
} from './reducers/lectureReducers'

import
{
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListReducer,
} from './reducers/orderReducers'

import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userForgotPassword: userForgotPasswordReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    courseList: courseListReducer,
    courseDetails: courseDetailsReducer,
    courseDelete: courseDeleteReducer,
    courseCreate: courseCreateReducer,
    courseUpdate: courseUpdateReducer,
    courseReviewCreate: courseReviewCreateReducer,

    lectureList: lectureListReducer,
    lectureDetails: lectureDetailsReducer,
    lectureDelete: lectureDeleteReducer,
    lectureCreate: lectureCreateReducer,
    lectureUpdate: lectureUpdateReducer,
    lectureReviewCreate: lectureReviewCreateReducer,

    cart: cartReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    //  orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store