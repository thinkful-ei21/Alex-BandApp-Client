import {
    EVENT_REQUEST,
    EVENT_SUCCESS,
    EVENT_ERROR,
    SINGLE_EVENT_REQUEST,
    SINGLE_EVENT_SUCCESS,
    ADD_EVENT_REQUEST,
    ADD_EVENT_SUCCESS,
    EDIT_EVENT_REQUEST,
    EDIT_EVENT_SUCCESS,
    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
    SET_EVENT_EDIT_INDEX
} from '../actions/event-list'

const initialState = {
    events: [],
    loading: false,
    error: null,
    editEvent: {},
    eventEditIndex: 0
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
    else if (action.type === SINGLE_EVENT_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === SINGLE_EVENT_SUCCESS) {

        return {...state, editEvent: action.event, error: null, loading:false }
    }
    else if (action.type === ADD_EVENT_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === ADD_EVENT_SUCCESS) {

        return {...state, error: null, loading:false }
    }
    else if (action.type === EDIT_EVENT_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === EDIT_EVENT_SUCCESS) {

        return {...state, editPost: {}, error: null, loading:false }
    }
    else if (action.type === DELETE_EVENT_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === DELETE_EVENT_SUCCESS) {

        return {...state, error: null, loading:false }
    }
    else if (action.type === SET_EVENT_EDIT_INDEX) {
        return {...state, eventEditIndex: action.index }
    }
    
    
    return state;
  }