import { call, put } from 'redux-saga/effects'
import { loginFailure, loginSucces } from './actions'

export function* login(action) {
    try {
        // const response = yield call(api.get, 'users')/
        // const response = yield call(api.get, '/login/usuario/')

        // const response = yield call(action.email, '/login/usuario/', {
        //     method: 'POST',
        //   });

        const response = yield call(action.payload ,'/login/usuario')

        yield put(loginSucces(response.data, response.code, response.menssage))
    } catch (err) {
        yield put(loginFailure())
    }
}
