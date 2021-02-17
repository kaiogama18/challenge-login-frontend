import { Reducer } from 'redux'
import { AuthState, AuthTypes } from './types'

const INITIAL_STATE: AuthState = {
    code: 200,
    menssage: 'USUÁRIO ENCONTRADO COM SUCESSO',
    data: [
        {
            nome: 'usuario teste ',
            cpf: '97517800043',
            email: 'usuarioteste@gmail.com',
            senha: 'heroku',
            ativo: 1
        }
    ]
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthTypes.LOGIN_REQUEST:
            return { ...state }

        case AuthTypes.LOGIN_SUCCESS:
            return {
                ...state,
                menssage: action.menssage,
                data: action.data
            }
        case AuthTypes.LOGIN_FAILURE:
            return {
                ...state,
                menssage: action.menssage,
                data: []
            }

        default:
            return state
    }
}

export default reducer
