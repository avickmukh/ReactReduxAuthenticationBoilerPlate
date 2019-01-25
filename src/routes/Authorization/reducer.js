import jwtDecode from 'jwt-decode'
import * as actions from './constants'


const ACTION_HANDLERS = {
    [actions.CLEAN]:state => ({
        ...state,
        ...initialState
    }),
    [actions.CREATE_USER]:state => ({
        ...state,
        isLoading: true
    }),
    [actions.CREATE_USER_SUCCESS]:(state, action) => {
        return {
            ...state,
            isLoading: false,
            userEmail: action.payload.user.email,
            accountActive: false
        }
    },
    [actions.ACTIVATE_USER_ACCOUNT]:(state, action) => {
        return {
            ...state,
            isLoading: true,
            accountActive: false
        }
    },
    [actions.ACTIVATE_USER_ACCOUNT_SUCCESS]:(state, action) => {
        return {
            ...state,
            isLoading: false,
            accountActive: true
        }
    },
    [actions.ACTIVATE_USER_ACCOUNT_ERROR]:(state, action) => {
        return {
            ...state,
            isLoading: false,
            accountActive: false
        }
    },
    [actions.ACTIVATE_USER_ACCOUNT]:state => ({
        ...state,
        isLoading: true
    }),
    [actions.LOGIN_USER]:(state, action) => {
        return {
            ...state,
            isLoading: true
        }
    },
    [actions.LOGIN_USER_SUCCESS]:(state, action) => {
        const jwtPayload = jwtDecode(action.payload.userData.access_token)
        localStorage.setItem('user', jwtPayload.name)
        return {
            ...state,
            isLoading: false
        }
    },
    [actions.LOGIN_USER_ERROR]:(state, action) => {
        return {
            ...state,
            isLoading: false
        }
    },
    [actions.SEND_FORGOT_EMAIL_TOKEN]:(state, action) => {
        return {
            ...state,
            isLoading: true,
            forgotTokenSend: false
        }
    },
    [actions.SEND_FORGOT_EMAIL_TOKEN_SUCCESS]:(state, action) => {
        return {
            ...state,
            isLoading: false,
            forgotTokenSend: true
        }
    },
    [actions.SEND_FORGOT_EMAIL_TOKEN_ERROR]:(state, action) => {
        return {
            ...state,
            isLoading: false,
            forgotTokenSend: false
        }
    },
    [actions.CHANGE_PASSWORD]:(state, action) => {
        return {
            ...state,
            isLoading: true,
            changeForgotPassword: false
        }
    },
    [actions.CHANGE_PASSWORD_SUCCESS]:(state, action) => {
        return {
            ...state,
            isLoading: false,
            forgotTokenSend: false,
            changeForgotPassword: true
        }
    },
    [actions.CHANGE_PASSWORD_ERROR]:(state, action) => {
        return {
            ...state,
            isLoading: false,
            forgotTokenSend: true,
            changeForgotPassword: false
        }
    },
    [actions.LOGOUT_USER]:(state, action) => {
        localStorage.clear()
        return {
            ...state,
            isLoading: false
        }
    },
}

const initialState = {
    isLoading : false,
    userEmail: '',
    user: null,
    accountActive: false,
    forgotTokenSend: false,
    changeForgotPassword: false
}

const reducer = (state = initialState, action) => {
    const handler = action ? ACTION_HANDLERS[action.type] : null
    return handler ? handler(state, action) : state
}

export default reducer

