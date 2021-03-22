import
{
    LECTURE_LIST_REQUEST,
    LECTURE_LIST_SUCCESS,
    LECTURE_LIST_FAIL,
    LECTURE_DETAILS_REQUEST,
    LECTURE_DETAILS_SUCCESS,
    LECTURE_DETAILS_FAIL,
    LECTURE_DELETE_REQUEST,
    LECTURE_DELETE_SUCCESS,
    LECTURE_DELETE_FAIL,
    LECTURE_CREATE_RESET,
    LECTURE_CREATE_FAIL,
    LECTURE_CREATE_SUCCESS,
    LECTURE_CREATE_REQUEST,
    LECTURE_UPDATE_REQUEST,
    LECTURE_UPDATE_SUCCESS,
    LECTURE_UPDATE_FAIL,
    LECTURE_UPDATE_RESET,
    LECTURE_CREATE_REVIEW_REQUEST,
    LECTURE_CREATE_REVIEW_SUCCESS,
    LECTURE_CREATE_REVIEW_FAIL,
    LECTURE_CREATE_REVIEW_RESET,
    LECTURE_TOP_REQUEST,
    LECTURE_TOP_SUCCESS,
    LECTURE_TOP_FAIL,
} from '../constants/lectureConstants'

export const lectureListReducer = (state = { lectures: [] }, action) =>
{
    switch (action.type) {
        case LECTURE_LIST_REQUEST:
            return { loading: true, lectures: [] }
        case LECTURE_LIST_SUCCESS:
            return {
                loading: false,
                lectures: action.payload.lectures,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case LECTURE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const lectureDetailsReducer = (
    state = { lecture: { reviews: [] } },
    action
) =>
{
    switch (action.type) {
        case LECTURE_DETAILS_REQUEST:
            return { ...state, loading: true }
        case LECTURE_DETAILS_SUCCESS:
            return { loading: false, lecture: action.payload }
        case LECTURE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const lectureDeleteReducer = (state = {}, action) =>
{
    switch (action.type) {
        case LECTURE_DELETE_REQUEST:
            return { loading: true }
        case LECTURE_DELETE_SUCCESS:
            return { loading: false, success: true }
        case LECTURE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const lectureCreateReducer = (state = {}, action) =>
{
    switch (action.type) {
        case LECTURE_CREATE_REQUEST:
            return { loading: true }
        case LECTURE_CREATE_SUCCESS:
            return { loading: false, success: true, lecture: action.payload }
        case LECTURE_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case LECTURE_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const lectureUpdateReducer = (state = { lecture: {} }, action) =>
{
    switch (action.type) {
        case LECTURE_UPDATE_REQUEST:
            return { loading: true }
        case LECTURE_UPDATE_SUCCESS:
            return { loading: false, success: true, lecture: action.payload }
        case LECTURE_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case LECTURE_UPDATE_RESET:
            return { lecture: {} }
        default:
            return state
    }
}

export const lectureReviewCreateReducer = (state = {}, action) =>
{
    switch (action.type) {
        case LECTURE_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case LECTURE_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case LECTURE_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case LECTURE_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}
