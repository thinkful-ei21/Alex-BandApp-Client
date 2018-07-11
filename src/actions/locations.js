import { API_BASE_URL } from '../config';
export const LOCATIONS_SEARCH_REQUEST = 'LOCATIONS_SEARCH_REQUEST'
export const fetchLocationsSearchRequest = () =>({
    type: LOCATIONS_SEARCH_REQUEST
})

export const LOCATIONS_SEARCH_SUCCESS = 'LOCATIONS_SEARCH_SUCCESS'
export const fetchLocationsSearchSuccess = (locations) =>({
    type: LOCATIONS_SEARCH_SUCCESS,
    locations
})

export const LOCATIONS_ERROR = 'LOCATIONS_ERROR'
export const fetchLocationsError = () =>({
    type: LOCATIONS_ERROR
})

export const fetchLocationsSearch = (term) => dispatch => {
    dispatch(fetchLocationsSearchRequest())
    fetch(`${API_BASE_URL}/locations/search/${term}`, {
        method: 'POST'
    })
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchLocationsSearchSuccess(res)))
    .catch(err => dispatch(fetchLocationsError(err)))
}

