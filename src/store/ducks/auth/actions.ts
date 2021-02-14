import { action } from 'typesafe-actions'
import { AuthTypes, User } from './types'

// export const loginRequest = (email: string, password: string) =>
//     action(AuthTypes.LOGIN_REQUEST, email, password)

export const loginRequest = () => action(AuthTypes.LOGIN_REQUEST)

export const loginSucces = (user: User) => action(AuthTypes.LOGIN_SUCCESS, user)

export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE)

export const Logout = () => action(AuthTypes.LOGOUT)
