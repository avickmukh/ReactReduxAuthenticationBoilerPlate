import * as actions from './constants'


const ACTION_HANDLERS = {
    [actions.CLEAN]:state => ({
        ...state,
        ...initialState
    }),
    [actions.LOGOUT]:(state, action) => {
        console.log('called')
        localStorage.clear()
        return {
            ...state,
            isLoading: false
        }
    },
}

const initialState = {
    isLoading : false
}

const reducer = (state = initialState, action) => {
    const handler = action ? ACTION_HANDLERS[action.type] : null
    return handler ? handler(state, action) : state
}

export default reducer

