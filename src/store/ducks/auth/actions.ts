import { action } from 'typesafe-actions'
import { AuthTypes, User } from './types'

export const autoLogin = () => action(AuthTypes.AUTO_LOGIN)

export const loginRequest = () =>
    action(AuthTypes.LOGIN_REQUEST)

export const loginSucces = (data: User[]) =>
    action(AuthTypes.LOGIN_SUCCESS, data)

export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE)

export const Logout = () => action(AuthTypes.LOGOUT)
