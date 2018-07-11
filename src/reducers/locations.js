import {
    LOCATIONS_SEARCH_REQUEST,
    LOCATIONS_SEARCH_SUCCESS,
    LOCATIONS_ERROR,
} from '../actions/locations'

const initialState = {
    locationsSearch: [],
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
    else if (action.type === LOCATIONS_ERROR) {

        return {...state, error:action.error, loading:false}
    }

    return state;
}