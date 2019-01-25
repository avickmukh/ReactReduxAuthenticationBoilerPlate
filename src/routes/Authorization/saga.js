import { put, takeLatest } from 'redux-saga/effects'
import { NotificationManager} from 'react-notifications';


import { createUserSuccess, createUserError, activateUserAccountError, activateUserAccountSuccess,
    loginUserSuccess, loginUserError, sendForgotEmailTokenSuccess, sendForgotEmailTokenError,
    changePasswordSuccess, changePasswordError
 } from './actions'
import { postDataAsync } from '../../apis/dataQuery'
import { loginBaseUrl, registerBaseUrl, emailVerificationBaseUrl,
    passwordEmailBaseUrl, changePasswordBaseUrl} from '../../apis/constants'

import { CREATE_USER, ACTIVATE_USER_ACCOUNT, LOGIN_USER,
    SEND_FORGOT_EMAIL_TOKEN, CHANGE_PASSWORD  } from './constants'

export function* createUser(action) {
    try{
        const {formData} = action.payload
        const response = yield postDataAsync(registerBaseUrl, formData)
        if(response.success) {
            yield put(createUserSuccess(response.data))
            NotificationManager.success('Please activate your account. You got one pass code in your registerd email id');
        } else {
            for (var key in response.error.message) {
                if (response.error.message.hasOwnProperty(key)) {
                    NotificationManager.error('Error message', response.error.message[key], 5000);
                }
            }
            yield put(createUserError({}))
        }
    } catch(ex){
        yield put(createUserError(ex.message))
    }
}

export function* sendForgotEmailToken(action) {
    try{
        const {formData} = action.payload
        const response = yield postDataAsync(passwordEmailBaseUrl, formData)
        if(response.success) {
           yield put(sendForgotEmailTokenSuccess(response.data))
        } else {
            for (var key in response.error.message) {
                if (response.error.message.hasOwnProperty(key)) {
                    NotificationManager.error('Error message', response.error.message[key], 5000);
                }
            }
            yield put(sendForgotEmailTokenError({}))
        }
    } catch(ex){
        yield put(sendForgotEmailTokenError(ex.message))
    }
}

export function* changePassword(action) {
    try{       
        const {formData} = action.payload      
        const response = yield postDataAsync(changePasswordBaseUrl, formData)
        if(response.success) {
           yield put(changePasswordSuccess(response.data))
           NotificationManager.success('Your password changed successfully');
        } else {
            for (var key in response.error.message) {
                if (response.error.message.hasOwnProperty(key)) {
                    NotificationManager.error('Error message', response.error.message[key], 5000);
                }
            }
            yield put(changePasswordError({}))
        }
    } catch(ex){
        yield put(changePasswordError(ex.message))
    }
}

export function* activateUserAccount(action) {
    try{
        const {formData} = action.payload
        const response = yield postDataAsync(emailVerificationBaseUrl, formData)
        if(response.success) {
            yield put(activateUserAccountSuccess())
            NotificationManager.success('Your account created successfully');
        } else {
            NotificationManager.error('Error message', response.error.message, 5000);
        }
    } catch(ex){
        yield put(activateUserAccountError(ex.message))
    }
}

export function* loginUser(action) {
    try{
        const {formData} = action.payload
        console.log(loginBaseUrl)
        const response = yield postDataAsync(loginBaseUrl, formData)
        if(response.success) {
            yield put(loginUserSuccess(response.data))            
            NotificationManager.success('You are logged in successfully');
        } else {
            NotificationManager.error(response.error.message);
        }
    } catch(ex){
        yield put(loginUserError(ex.message))
    }
}


export default function* rootSaga() {
    yield takeLatest(CREATE_USER, createUser)
    yield takeLatest(ACTIVATE_USER_ACCOUNT, activateUserAccount)
    yield takeLatest(LOGIN_USER, loginUser)
    yield takeLatest(SEND_FORGOT_EMAIL_TOKEN, sendForgotEmailToken)
    yield takeLatest(CHANGE_PASSWORD, changePassword)
}