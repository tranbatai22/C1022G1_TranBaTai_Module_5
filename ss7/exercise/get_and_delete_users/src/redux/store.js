import {  applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducer/rootReducer'
import thunk from 'redux-thunk'

const initState = {}

const middleware = [thunk]

export const store = createStore (
    rootReducer,
    initState,
    applyMiddleware(...middleware)
)