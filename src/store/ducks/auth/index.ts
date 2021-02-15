import { Reducer } from 'redux'
import { AuthState, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
    data: [
        {
            id: '1',
            email: 'Alvera.Reinger6@hotmail.com',
            password: 'R2a3VKnRdPpu8YL'
        }
    ],
    isLogged: false,
    loading: false,
    error: false
}

// const INITIAL_STATE: AuthState = {
//     data: [],
//     isLogged: false,
//     loading: false,
//     error: false
// }


const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthTypes.LOGIN_REQUEST:
            return { ...state, loading: true }
        case AuthTypes.LOGIN_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLogged: true,
                loading: false
            }
        case AuthTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                isLogged: false,
                error: true,
                data: []
            }
        case AuthTypes.LOGOUT:
            return {
                ...state,
                loading: false,
                isLogged: false,
                data: []
            }
        default:
            return state
    }
}

export default reducer
