import {
    LOCATIONS_SEARCH_REQUEST,
    LOCATIONS_SEARCH_SUCCESS,
    ALL_LOCATIONS_REQUEST,
    ALL_LOCATIONS_SUCCESS,
    LOCATIONS_ERROR,
} from '../actions/locations'

const initialState = {
    locationsSearch: [],
    locations: [],
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === LOCATIONS_SEARCH_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === LOCATIONS_SEARCH_SUCCESS) {
        // console.log(action.locations)
        return {...state, locationsSearch: action.locations, error: null, loading:false }
    }
    else if (action.type === ALL_LOCATIONS_REQUEST) {
        // console.log(action.locations)
        return {...state, loading:true}
    }
    else if (action.type === ALL_LOCATIONS_SUCCESS) {
        // console.log(action.locations)
        return {...state, locations: action.locations, error: null, loading:false }
    }
    else if (action.type === LOCATIONS_ERROR) {

        return {...state, error:action.error, loading:false}
    }

    return state;
}