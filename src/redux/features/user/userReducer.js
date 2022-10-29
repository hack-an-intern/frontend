import {
    USER_CHECK_REQUEST,
    USER_CHECK_SUCCESS,
    USER_CHECK_FAILURE,

} from './userType'



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