
import {
    POST_REQUEST,
    POST_SUCCESS,
    SINGLE_POST_REQUEST,
    SINGLE_POST_SUCCESS,
    POST_ERROR,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    EDIT_POST_REQUEST,
    EDIT_POST_SUCCESS,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS
} from '../actions/post-list'

const initialState = {
    posts: [],
    editPost: {},
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === POST_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === POST_SUCCESS) {
        // console.log(action.POSTs)
        return {...state, posts: action.posts, error: null, loading:false }
    }
    else if (action.type === POST_ERROR) {

        return {...state, error:action.error, loading:false}
    }
    else if (action.type === SINGLE_POST_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === SINGLE_POST_SUCCESS) {

        return {...state, editPost: action.post, error: null, loading:false }
    }
    else if (action.type === ADD_POST_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === ADD_POST_SUCCESS) {

        return {...state, error: null, loading:false }
    }
    else if (action.type === EDIT_POST_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === EDIT_POST_SUCCESS) {

        return {...state, editPost: {}, error: null, loading:false }
    }
    else if (action.type === DELETE_POST_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === DELETE_POST_SUCCESS) {

        return {...state, error: null, loading:false }
    }
    
    //console.log(state)
    return state;
  }