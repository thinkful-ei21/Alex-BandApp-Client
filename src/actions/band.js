import { API_BASE_URL } from '../config';

export const BAND_REQUEST = 'BAND_REQUEST'
export const fetchBandRequest = () =>({
    type: BAND_REQUEST
})

export const BAND_SUCCESS = 'BAND_SUCCESS'
export const fetchBandSuccess = (band) =>({
    type: BAND_SUCCESS,
    band
})

export const BAND_ERROR = 'BAND_ERROR'
export const fetchBandError = (error) =>({
    type: BAND_ERROR,
    error
})

export const fetchBand = (name) => dispatch =>{
    dispatch(fetchBandRequest())
    fetch(`${API_BASE_URL}/bands/${name}`)
    .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
    .then(res => dispatch(fetchBandSuccess(res)))
    .catch(err => dispatch(fetchBandError(err)))
}