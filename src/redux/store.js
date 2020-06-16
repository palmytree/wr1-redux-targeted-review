import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './authReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
)
