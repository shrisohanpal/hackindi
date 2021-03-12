import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import
{
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
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


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    courseList: courseListReducer,
    courseDetails: courseDetailsReducer,
    courseDelete: courseDeleteReducer,
    courseCreate: courseCreateReducer,
    courseUpdate: courseUpdateReducer,
    courseReviewCreate: courseReviewCreateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    cart: {
        // cartItems: cartItemsFromStorage,
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