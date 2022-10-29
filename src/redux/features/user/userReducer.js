import {
    USER_CHECK_SUCCESS,
    CURRENT_MARKET_PRICE_REQUEST,
    TRADE_HISTORY_REQUEST,
    LIMIT_ORDER_REQUEST

} from './userType'



const initialState = {
    data: null
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case USER_CHECK_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case CURRENT_MARKET_PRICE_REQUEST:
            return {
                ...state,
                price: action.payload
            }
        case TRADE_HISTORY_REQUEST:
            return {
                ...state,
                trade: action.payload
            }
        case LIMIT_ORDER_REQUEST:
            return {
                ...state,
                limit: action.payload
            }
        default:
            return state;
    }
}

export default userReducer