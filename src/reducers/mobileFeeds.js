import {
    MOBILE_FEED_HIDDEN,
    SELECT_RADIO_BUTTON
} from '../actions/mobile-feeds'

const initialState = {
    hidden: 0,
    radioId: "tab-1"
}

export default function reducer (state = initialState, action) {
    if (action.type === MOBILE_FEED_HIDDEN) {
        return {...state, hidden: action.hidden}
    }
    else if (action.type === SELECT_RADIO_BUTTON) {
        return {...state, radioId: action.radioId}
    }
    
    return state;
}