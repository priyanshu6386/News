const redux = require('redux')
const { createStore, applyMiddleware, combineReducers } = redux
const reduxLogger = require('redux-logger')
const { createLogger } = reduxLogger

/*
	---------------------------------------------
	ACTIONS
	- Action objects
	Action to increment count
	{
		type: 'INCREMENT_COUNT'
	}
	Action to decrement count
	{
		type: 'DECREMENT_COUNT'
	}
*/

// - Action type constants
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'

const DISPLAY = 'DISPLAY'
const HIDE = 'HIDE'

// - Action Creators - Functions which return an action object
const incrementCount = (value = 1) => ({
	type: INCREMENT_COUNT,
	payload: value
})
const decrementCount = (value = 1) => ({
	type: DECREMENT_COUNT,
	payload: value
})

const display = () => ({
	type: DISPLAY
})
const hide = () => ({
	type: HIDE
})

/* ----------------------------------------------*/

// REDUCER FUNCTION
/*
	REDUCER
	- Create an initial state
	- It has two parameters - prevState, action
	- Contains logic to return updated state on basis of prevState and action
*/

const countInitialState = {
	count: 0,
}
const countReducer = (state = countInitialState, action) => {
	switch(action.type) {
		case INCREMENT_COUNT:
			return {
				...state,
				count: state.count + action.payload
			}
		case DECREMENT_COUNT: 
			return {
				...state,
				count: state.count - action.payload
			}
		default:
			return state
	}
}

const showInitialState = {
	show: false,
}
const showReducer = (state = showInitialState, action) => {
	switch(action.type) {
		case DISPLAY:
			return {
				...state,
				show: true
			}
		case HIDE: 
			return {
				...state,
				show: false
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	countReducer,
	showReducer
})

/* ----------------------------------------------*/
// Redux Store
const store = createStore(rootReducer, applyMiddleware(createLogger()))
// .subscribe -> Subscribing to the redux store, returns a reference to unsubscribe method
const unsubscribe = store.subscribe(() => {})

// .getState -> Get the current state of the redux store
// .dispatch -> Dispatch actions to cause state updates


store.dispatch(incrementCount(2))
store.dispatch(display())
store.dispatch(incrementCount())
store.dispatch(hide())
store.dispatch(decrementCount(5))

unsubscribe()