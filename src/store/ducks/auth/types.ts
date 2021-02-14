/**
 * Action types
 * */

export enum AuthTypes {
    AUTO_LOGIN = 'AUTH_AUTO_LOGIN',

    LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST',
    LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS',
    LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE',

    LOGOUT = 'AUTH/LOGOUT'
}

/**
 * Data Types
 * */

export interface User {
    id: number
    name: string
}

/**
 * State Type
 * */

export interface AuthState {
    readonly data: User[]
    readonly isLogged: boolean
    readonly loading: boolean
    readonly error: boolean
}
