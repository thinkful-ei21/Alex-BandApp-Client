import { API_BASE_URL } from '../config';


export const EVENT_REQUEST = 'EVENT_REQUEST'
export const fetchEventsRequest = () =>({
    type: EVENT_REQUEST
})

export const EVENT_SUCCESS = 'EVENT_SUCCESS'
export const fetchEventsSuccess = (events) =>({
    type: EVENT_SUCCESS,
    events
})

export const EVENT_ERROR = 'EVENT_ERROR'
export const fetchEventsError = (error) =>({
    type: EVENT_ERROR,
    error
})

export const fetchEvents = () => dispatch =>{
    dispatch(fetchEventsRequest())
    fetch(`${API_BASE_URL}/events`)
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchEventsSuccess(res)))
    .catch(err => dispatch(fetchEventsError(err)))
}