import { API_BASE_URL } from '../config';

export const POST_REQUEST = 'POST_REQUEST'
export const fetchPostsRequest = () =>({
    type: POST_REQUEST
})

export const POST_SUCCESS = 'POST_SUCCESS'
export const fetchPostsSuccess = (posts) =>({
    type: POST_SUCCESS,
    posts
})

export const POST_ERROR = 'POST_ERROR'
export const fetchPostsError = (error) =>({
    type: POST_ERROR,
    error
})

export const fetchPosts = () => dispatch =>{
    dispatch(fetchPostsRequest())
    fetch(`${API_BASE_URL}/posts`)
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchPostsSuccess(res)))
    .catch(err => dispatch(fetchPostsError(err)))
}

