import {
    BAND_REQUEST,
    BAND_SUCCESS,
    BAND_ERROR
} from '../actions/band'

const initialState = {
    band: '',
    loading: false,
    error: null
}

export default function reducer (state = initialState, action) {
    if (action.type === BAND_REQUEST) {
        return {...state, loading:true}
    }
    else if (action.type === BAND_SUCCESS) {
        return {...state, band: action.band, error: null, loading:false }
    }
    else if (action.type === BAND_ERROR) {
        return {...state, error: null, loading:false }
    }
    
    return state;
}