import { all, takeLatest } from 'redux-saga/effects'
import { login } from './auth/sagas'
import { AuthTypes } from './auth/types'

export default function* rootSaga() {
    return yield all([takeLatest(AuthTypes.LOGIN_REQUEST, login)])
}
