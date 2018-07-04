
import {
    POST_REQUEST,
    POST_SUCCESS,
    POST_ERROR
} from '../actions/post-list'

const initialState = {
    posts: [],
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
    
    return state;
  }