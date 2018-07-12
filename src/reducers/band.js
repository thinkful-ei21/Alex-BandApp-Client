import {
    BAND_REQUEST,
    BAND_SUCCESS,
    ALL_BANDS_REQUEST,
    ALL_BANDS_SUCCESS,
    BAND_ERROR
} from '../actions/band'

const initialState = {
    band: '',
    allBands: '',
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
    else if (action.type === ALL_BANDS_REQUEST) {
        return {...state, loading:true}
    }
    else if (action.type === ALL_BANDS_SUCCESS) {
        return {...state, allBands: action.allBands, error: null, loading:false }
    }
    
    return state;
}