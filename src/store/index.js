import React from 'react'
import thunk from 'redux-thunk';
import {
	createStore, 
	combineReducers, 
	applyMiddleware
} from 'redux'

const home = ( state = {} ) => {
	return state;
}

const store = createStore(
	combineReducers({ home }),
	applyMiddleware(thunk)
)

store.asyncReducers = { home }

export default store