import {
    USER_CHECK_SUCCESS,

} from './userType'



//ALL the action creator for login flow (userCheck->otpSend->login->logout)

export const userSuccess = (user) => {

    return {
        type: USER_CHECK_SUCCESS,
        payload: user
    }


}











