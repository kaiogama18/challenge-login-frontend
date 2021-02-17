import { action } from 'typesafe-actions'
import { AuthTypes, User } from './types'

export const loginRequest = (email: string, senha: string) =>
    action(AuthTypes.LOGIN_REQUEST, email, senha)

export const loginSucces = (code: number, menssage: string, data: User[]) =>
    action(AuthTypes.LOGIN_SUCCESS, code, menssage, data)

export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE)
