import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'
import { loginFailure, loginSucces } from './actions'

export function* login() {
    try {
        const response = yield call(api.get, 'users')

        yield put(loginSucces(response.data, response.code, response.menssage))
    } catch (err) {
        yield put(loginFailure())
    }
}
