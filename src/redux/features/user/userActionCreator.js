import {
    USER_CHECK_SUCCESS,
    CURRENT_MARKET_PRICE_REQUEST,
    TRADE_HISTORY_REQUEST,
    LIMIT_ORDER_REQUEST

} from './userType'



//ALL the action creator for login flow (userCheck->otpSend->login->logout)

export const userSuccess = (user) => {

    return {
        type: USER_CHECK_SUCCESS,
        payload: user
    }

}

export const currentMarketPrice = (price) => {

    return {
        type: CURRENT_MARKET_PRICE_REQUEST,
        payload: price
    }
}

export const tradeHistory = (trade) => {

    return {
        type: TRADE_HISTORY_REQUEST,
        payload: trade
    }
}

export const limitOrder = (limit) => {
    return {
        type: LIMIT_ORDER_REQUEST,
        payload: limit
    }
}









