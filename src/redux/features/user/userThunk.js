import * as auth from './loginActionCreator'
import * as user from './userActionCreator'
import * as error from '../../error/errorActionCreator'
import API from '../../../api'

//ALL the Asyncronous logic for login will be here

export const getUserdata = () => {
    API.get('/users/')
    .then(res => {
        dispatch(user.userSuccess());
    })
    .catch(err => {
        console.log(err);
    })
}
