import {
    EVENT_REQUEST,
    EVENT_SUCCESS,
    EVENT_ERROR
} from '../actions/event-list'

const initialState = {
    events: [],
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === EVENT_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === EVENT_SUCCESS) {
        // console.log(action.EVENTs)
        return {...state, events: action.events, error: null, loading:false }
    }
    else if (action.type === EVENT_ERROR) {

        return {...state, error:action.error, loading:false}
    }
    
    
    return state;
  }