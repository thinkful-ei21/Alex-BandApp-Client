import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

import posts from './reducers/posts'
import events from './reducers/events'
import modals from './reducers/modals'
const reducers = combineReducers({posts, events, modals});

export default createStore(reducers, {modals: { isShowing: false}}, applyMiddleware(thunk));