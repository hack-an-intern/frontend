import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    OTP_SEND_REQUEST,
    OTP_SEND_SUCCESS,
    OTP_SEND_FAILURE,
    USER_CHECK_REQUEST,
    USER_CHECK_SUCCESS,
    USER_CHECK_FAILURE,
    LOGIN_CLICK

} from './loginType'



const initialState = {
    data: null
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CHECK_REQUEST:
            return {
                ...state,
                data: null
            }
        case USER_CHECK_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case USER_CHECK_FAILURE:
            return {
                ...state,
                data: null
            }
        default:
            return state;
    }
}

export default userReducer