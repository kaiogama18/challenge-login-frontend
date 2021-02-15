import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { AuthState } from './ducks/auth/types'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export interface ApplicationState {
    auth: AuthState
}

const store: Store<ApplicationState> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
