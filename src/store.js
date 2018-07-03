import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

import posts from './reducers/posts'
import events from './reducers/events'
const reducers = combineReducers({posts, events});

export default createStore(reducers, applyMiddleware(thunk));