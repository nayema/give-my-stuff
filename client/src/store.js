import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './modules/root-reducer'
import * as donationDropBoxes from './modules/donation-drop-boxes'

const sagaMiddleware = createSagaMiddleware()
export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

sagaMiddleware.run(donationDropBoxes.sagas.loadAll)
sagaMiddleware.run(donationDropBoxes.sagas.obtainCurrentLocation)

export default store
