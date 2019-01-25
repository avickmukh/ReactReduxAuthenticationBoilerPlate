import { CREATE_USER_SUCCESS, CREATE_USER_ERROR, CREATE_USER, ACTIVATE_USER_ACCOUNT ,
    ACTIVATE_USER_ACCOUNT_SUCCESS, ACTIVATE_USER_ACCOUNT_ERROR, CLEAN,
    LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER,
    SEND_FORGOT_EMAIL_TOKEN_SUCCESS,
    SEND_FORGOT_EMAIL_TOKEN, SEND_FORGOT_EMAIL_TOKEN_ERROR,
    CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR
} from './constants'

export const clean = () => ({
    type: CLEAN
})

export const createUser = (formData) => ({
    type: CREATE_USER,
    payload: {
        formData
    }
})

export const createUserSuccess = (userData) => ({
    type: CREATE_USER_SUCCESS,
    payload: {
        user: userData
    }
})

export const createUserError = () => ({
    type: CREATE_USER_ERROR,
    payload: {
        
    }
})

export const activateUserAccount = (formData) => ({
    type: ACTIVATE_USER_ACCOUNT,
    payload: {
        formData
    }
})

export const activateUserAccountSuccess = () => ({
    type: ACTIVATE_USER_ACCOUNT_SUCCESS,
    payload: {
        
    }
})

export const activateUserAccountError = () => ({
    type: ACTIVATE_USER_ACCOUNT_ERROR,
    payload: {
        
    }
})

export const loginUser = (formData) => ({
    type: LOGIN_USER,
    payload: {
        formData
    }
})

export const loginUserSuccess = (userData) => ({
    type: LOGIN_USER_SUCCESS,
    payload: {
        userData
    }
})

export const loginUserError = () => ({
    type: LOGIN_USER_ERROR,
    payload: {
        
    }
})

export const logoutUser = () => ({
    type: LOGOUT_USER
})

export const sendForgotEmailToken = (formData) => ({
    type: SEND_FORGOT_EMAIL_TOKEN,
    payload: {
        formData
    }
})

export const sendForgotEmailTokenSuccess = (userData) => ({
    type: SEND_FORGOT_EMAIL_TOKEN_SUCCESS,
    payload: {
        user: userData
    }
})

export const sendForgotEmailTokenError = () => ({
    type: SEND_FORGOT_EMAIL_TOKEN_ERROR,
    payload: {
        
    }
})

export const changePassword = (formData) => ({
    type: CHANGE_PASSWORD,
    payload: {
        formData
    }
})

export const changePasswordSuccess = (userData) => ({
    type: CHANGE_PASSWORD_SUCCESS,
    payload: {
        user: userData
    }
})

export const changePasswordError = () => ({
    type: CHANGE_PASSWORD_ERROR,
    payload: {
        
    }
})
