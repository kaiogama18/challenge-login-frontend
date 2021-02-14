import { Reducer } from 'redux'
import { AuthState, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
    user: {
        id: '1',
        email: 'email 1',
        password: 'password 1'
    },
    isLogged: false,
    loading: false,
    error: false
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthTypes.LOGIN_REQUEST:
            return { ...state, loading: true }
        case AuthTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLogged: true,
                loading: false
            }
        case AuthTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                isLogged: false,
                error: true
            }
        case AuthTypes.LOGOUT:
            return {
                ...state,
                loading: false,
                isLogged: false,
                user: null
            }
        default:
            return state
    }
}

export default reducer
