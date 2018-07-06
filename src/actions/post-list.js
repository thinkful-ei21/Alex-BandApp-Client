import { API_BASE_URL } from '../config';

export const POST_REQUEST = 'POST_REQUEST'
export const fetchPostsRequest = () =>({
    type: POST_REQUEST
})

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const addPostRequest = () =>({
    type: ADD_POST_REQUEST
})

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST'
export const deletePostRequest = () =>({
    type: DELETE_POST_REQUEST
})

export const POST_SUCCESS = 'POST_SUCCESS'
export const fetchPostsSuccess = (posts) =>({
    type: POST_SUCCESS,
    posts
})

export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const addPostSuccess = () =>({
    type: ADD_POST_SUCCESS,
})

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const deletePostSuccess = () =>({
    type: DELETE_POST_SUCCESS,
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

export const addPost = (values) => dispatch =>{
    dispatch(addPostRequest())
    fetch(`${API_BASE_URL}/posts`,{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(addPostSuccess()))
    .then(res => dispatch(fetchPosts()))
    .catch(err => dispatch(fetchPostsError(err)))
}

export const deletePost = (id) => dispatch =>{
    dispatch(deletePostRequest())
    fetch(`${API_BASE_URL}/posts/${id}`,{
        method: 'DELETE'
        }
    ).then(res => !res.ok ? Promise.reject(res.statusText) : undefined)
    .then(res => dispatch(deletePostSuccess()))
    .then(res => dispatch(fetchPosts()))
    .catch(err => dispatch(fetchPostsError(err)))
}
