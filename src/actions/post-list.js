import { API_BASE_URL } from '../config';

export const POST_REQUEST = 'POST_REQUEST'
export const fetchPostsRequest = () =>({
    type: POST_REQUEST
})

export const SINGLE_POST_REQUEST = 'SINGLE_POST_REQUEST'
export const fetchPostRequest = () =>({
    type: SINGLE_POST_REQUEST
})

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const addPostRequest = () =>({
    type: ADD_POST_REQUEST
})

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST'
export const editPostRequest = () =>({
    type: EDIT_POST_REQUEST
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

export const SINGLE_POST_SUCCESS = 'SINGLE_POST_SUCCESS'
export const fetchPostSuccess = (post) =>({
    type: SINGLE_POST_SUCCESS,
    post
})

export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const addPostSuccess = () =>({
    type: ADD_POST_SUCCESS,
})

export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS'
export const editPostSuccess = () =>({
    type: EDIT_POST_SUCCESS,
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

export const fetchPost = (id) => dispatch =>{
    dispatch(fetchPostRequest())
    fetch(`${API_BASE_URL}/posts/${id}`)
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchPostSuccess(res)))
    .catch(err => dispatch(fetchPostsError(err)))
}

export const addPost = (values) => (dispatch, getState) =>{
    const authToken = getState().auth.authToken
    dispatch(addPostRequest())
    fetch(`${API_BASE_URL}/posts`,{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    }).then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(addPostSuccess()))
    .then(res => dispatch(fetchPosts()))
    .catch(err => dispatch(fetchPostsError(err)))
}

export const deletePost = (id) => (dispatch, getState) =>{
    const authToken = getState().auth.authToken
    dispatch(deletePostRequest())
    fetch(`${API_BASE_URL}/posts/${id}`,{
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
        }
    ).then(res => !res.ok ? Promise.reject(res.statusText) : undefined)
    .then(res => dispatch(deletePostSuccess()))
    .then(res => dispatch(fetchPosts()))
    .catch(err => dispatch(fetchPostsError(err)))
}

export const editPost = (id, values) => (dispatch, getState) =>{
    const authToken = getState().auth.authToken
    dispatch(editPostRequest())
    fetch(`${API_BASE_URL}/posts/${id}`,{
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    }).then(res => !res.ok ? Promise.reject(res.statusText) : undefined)
    .then(res => dispatch(editPostSuccess()))
    .then(res => dispatch(fetchPosts()))
    .catch(err => dispatch(fetchPostsError(err)))
}
