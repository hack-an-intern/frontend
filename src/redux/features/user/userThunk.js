import * as user from './userActionCreator'
import API from '../../../api'

//ALL the Asyncronous logic for login will be here

export function getUserdata() {
    return (dispatch, getState) => {
        API.get('/users/')
            .then(res => {
                dispatch(user.userSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function getMarketPrice() {
    return (dispatch, getState) => {
        API.get('/price/')
            .then(res => {
                dispatch(user.currentMarketPrice(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export function getTradeHistory() {
    return (dispatch, getState) => {
        API.get('/tradehistory/')
            .then(res => {
                dispatch(user.tradeHistory(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function getLimitOrder() {
    return (dispatch, getState) => {
        API.get('/limitorder/')
            .then(res => {
                dispatch(user.limitOrder(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}