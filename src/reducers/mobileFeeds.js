import {
    MOBILE_FEED_HIDDEN,
} from '../actions/mobile-feeds'

const initialState = {
    hidden: 0
}

export default function reducer (state = initialState, action) {
    if (action.type === MOBILE_FEED_HIDDEN) {
        return {...state, hidden: action.hidden}
    }
    
    return state;
}