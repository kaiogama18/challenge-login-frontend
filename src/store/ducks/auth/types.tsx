/**
 * Action types
 * */

export enum AuthTypes {

    LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST',
    LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS',
    LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE',
}

/**
 * Data Types
 * */

export interface User {
    id: string
    email: string
    password: string
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
