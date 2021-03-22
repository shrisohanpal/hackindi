import axios from 'axios'
import
{
    LECTURE_LIST_REQUEST,
    LECTURE_LIST_SUCCESS,
    LECTURE_LIST_FAIL,
    LECTURE_DETAILS_REQUEST,
    LECTURE_DETAILS_SUCCESS,
    LECTURE_DETAILS_FAIL,
    LECTURE_DELETE_SUCCESS,
    LECTURE_DELETE_REQUEST,
    LECTURE_DELETE_FAIL,
    LECTURE_CREATE_REQUEST,
    LECTURE_CREATE_SUCCESS,
    LECTURE_CREATE_FAIL,
    LECTURE_UPDATE_REQUEST,
    LECTURE_UPDATE_SUCCESS,
    LECTURE_UPDATE_FAIL,
    LECTURE_CREATE_REVIEW_REQUEST,
    LECTURE_CREATE_REVIEW_SUCCESS,
    LECTURE_CREATE_REVIEW_FAIL,
    LECTURE_TOP_REQUEST,
    LECTURE_TOP_SUCCESS,
    LECTURE_TOP_FAIL,
} from '../constants/lectureConstants'
import { logout } from './userActions'

export const listLectures = () => async (
    dispatch
) =>
{
    try {
        dispatch({ type: LECTURE_LIST_REQUEST })

        const { data } = await axios.get(
            '/api/lectures'
        )

        dispatch({
            type: LECTURE_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LECTURE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listLectureDetails = (id) => async (dispatch) =>
{
    try {
        dispatch({ type: LECTURE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/lectures/${id}`)

        dispatch({
            type: LECTURE_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LECTURE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteLecture = (id) => async (dispatch, getState) =>
{
    try {
        dispatch({
            type: LECTURE_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/lectures/${id}`, config)

        dispatch({
            type: LECTURE_DELETE_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: LECTURE_DELETE_FAIL,
            payload: message,
        })
    }
}

export const createLecture = () => async (dispatch, getState) =>
{
    try {
        dispatch({
            type: LECTURE_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/lectures`, {}, config)

        dispatch({
            type: LECTURE_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: LECTURE_CREATE_FAIL,
            payload: message,
        })
    }
}

export const updateLecture = (lecture) => async (dispatch, getState) =>
{
    try {
        dispatch({
            type: LECTURE_UPDATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(
            `/api/lectures/${lecture._id}`,
            lecture,
            config
        )

        dispatch({
            type: LECTURE_UPDATE_SUCCESS,
            payload: data,
        })
        dispatch({ type: LECTURE_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: LECTURE_UPDATE_FAIL,
            payload: message,
        })
    }
}

export const createLectureReview = (lectureId, review) => async (
    dispatch,
    getState
) =>
{
    try {
        dispatch({
            type: LECTURE_CREATE_REVIEW_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.post(`/api/lecture/${lectureId}/reviews`, review, config)

        dispatch({
            type: LECTURE_CREATE_REVIEW_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: LECTURE_CREATE_REVIEW_FAIL,
            payload: message,
        })
    }
}