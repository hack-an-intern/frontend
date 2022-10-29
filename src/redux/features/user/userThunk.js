import * as user from './userActionCreator'
import * as error from '../../error/errorActionCreator'
import API from '../../../api'

//ALL the Asyncronous logic for login will be here

export default function getUserdata(){
    return (dispatch, getState)=>{
    API.get('/users/')
    .then(res => {
        dispatch(user.userSuccess(res.data));
    })
    .catch(err => {
        console.log(err);
    })}
}
