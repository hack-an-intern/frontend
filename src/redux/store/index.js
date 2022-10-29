import { applyMiddleware,createStore,combineReducers } from "redux";
import authentication from '../features/login/loginReducer'
import student from '../features/studentprofile/profileReducer'
import errors from '../error/errorReducer'
import user from '../features/user/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
    // auth:authentication,
    // student:student,
    // errors:errors,
    user:user

})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk) ));
export default store