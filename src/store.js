import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

import posts from './reducers/posts'
import events from './reducers/events'
import modals from './reducers/modals'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({posts, events, modals, form: formReducer});

export default createStore(reducers, {modals: { isShowing: false}}, applyMiddleware(thunk));