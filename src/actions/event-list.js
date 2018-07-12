import { API_BASE_URL } from '../config';

export const EVENT_REQUEST = 'EVENT_REQUEST'
export const fetchEventsRequest = () =>({
    type: EVENT_REQUEST
})

export const SINGLE_EVENT_REQUEST = 'SINGLE_EVENT_REQUEST'
export const fetchEventRequest = () =>({
    type: SINGLE_EVENT_REQUEST
})

export const ADD_EVENT_REQUEST = 'ADD_EVENT_REQUEST'
export const addEventRequest = () =>({
    type: ADD_EVENT_REQUEST
})

export const EDIT_EVENT_REQUEST = 'EDIT_EVENT_REQUEST'
export const editEventRequest = () =>({
    type: EDIT_EVENT_REQUEST
})

export const DELETE_EVENT_REQUEST = 'DELETE_EVENT_REQUEST'
export const deleteEventRequest = () =>({
    type: DELETE_EVENT_REQUEST
})

export const EVENT_SUCCESS = 'EVENT_SUCCESS'
export const fetchEventsSuccess = (events) =>({
    type: EVENT_SUCCESS,
    events
})

export const SINGLE_EVENT_SUCCESS = 'SINGLE_EVENT_SUCCESS'
export const fetchEventSuccess = (event) =>({
    type: SINGLE_EVENT_SUCCESS,
    event
})

export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS'
export const addEventSuccess = () =>({
    type: ADD_EVENT_SUCCESS,
})

export const EDIT_EVENT_SUCCESS = 'EDIT_EVENT_SUCCESS'
export const editEventSuccess = () =>({
    type: EDIT_EVENT_SUCCESS,
})

export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS'
export const deleteEventSuccess = () =>({
    type: DELETE_EVENT_SUCCESS,
})

export const EVENT_ERROR = 'EVENT_ERROR'
export const fetchEventsError = (error) =>({
    type: EVENT_ERROR,
    error
})

export const SET_EVENT_EDIT_INDEX = 'SET_EVENT_EDIT_INDEX'
export const setEventEditIndex = (index) =>({
    type: SET_EVENT_EDIT_INDEX,
    index
})

export const fetchEvents = () => dispatch =>{
    dispatch(fetchEventsRequest())
    fetch(`${API_BASE_URL}/events`)
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchEventsSuccess(res)))
    .catch(err => dispatch(fetchEventsError(err)))
}

export const fetchEventsByBand = (band) => dispatch =>{
    dispatch(fetchEventsRequest())
    fetch(`${API_BASE_URL}/events/byBand`, {
        method: 'POST',
        body: JSON.stringify(band),
        headers: {
            'Content-Type': 'application/json'
        }})
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchEventsSuccess(res)))
    .catch(err => dispatch(fetchEventsError(err)))
}

export const fetchEvent = (id) => dispatch =>{
    let x = {}
    dispatch(fetchEventRequest())
    fetch(`${API_BASE_URL}/events/${id}`)
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => {
        x = res
        console.log(res.location[0])
        return res
    })
    .then(res => { return fetch(`${API_BASE_URL}/locations/${res.location[0]}`)})
    .then(res =>  res.json())
    .then(res => { console.log(res)
         x = {...x, locationName: res.name}
         
    })
    .then(res => dispatch(fetchEventSuccess(x)))
    .catch(err => dispatch(fetchEventsError(err)))
}

export const addEvent = (values) => (dispatch, getState) =>{
    const authToken = getState().auth.authToken
    dispatch(addEventRequest())
    fetch(`${API_BASE_URL}/locations/search/${values.location}`, {
        method: 'POST'
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        values.location = res[0].id})
    .then(res => {return fetch(`${API_BASE_URL}/events`,{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })})
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(addEventSuccess()))
    .then(res => dispatch(fetchEvents()))
    .catch(err => dispatch(fetchEventsError(err)))
}

export const deleteEvent = (id) => (dispatch, getState) =>{
    const authToken = getState().auth.authToken
    dispatch(deleteEventRequest())
    fetch(`${API_BASE_URL}/events/${id}`,{
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
        }
    ).then(res => !res.ok ? Promise.reject(res.statusText) : undefined)
    .then(res => dispatch(deleteEventSuccess()))
    .then(res => dispatch(fetchEvents()))
    .catch(err => dispatch(fetchEventsError(err)))
}

export const editEvent = (id, values) => (dispatch, getState) =>{
    console.log(values)
    const authToken = getState().auth.authToken
    dispatch(editEventRequest())
    fetch(`${API_BASE_URL}/locations/search/${values.location}`, {
        method: 'POST'
    })
    .then(res =>  res.json())
    .then(res => {
        values.location = res[0].id
        
    })
    .then(res => {return fetch(`${API_BASE_URL}/events/${id}`,{
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })})
    .then(res => !res.ok ? Promise.reject(res.statusText) : undefined)
    .then(res => dispatch(editEventSuccess()))
    .then(res => dispatch(fetchEvents()))
    .catch(err => dispatch(fetchEventsError(err)))
}
