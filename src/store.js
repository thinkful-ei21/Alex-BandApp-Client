import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data'
import posts from './reducers/posts'
import events from './reducers/events'
import modals from './reducers/modals'
import {reducer as formReducer} from 'redux-form'
import {setAuthToken, refreshAuthToken} from './actions/auth';

const reducers = combineReducers({posts, events, modals, form: formReducer, auth: authReducer,
    protectedData: protectedDataReducer});
const store = createStore(reducers, {modals: { isShowing: false}}, applyMiddleware(thunk));

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;