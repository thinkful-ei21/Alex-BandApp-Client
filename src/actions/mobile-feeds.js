export const MOBILE_FEED_HIDDEN = 'MOBILE_FEED_HIDDEN'
export const checkMobileFeedHidden = () =>({
    type: MOBILE_FEED_HIDDEN,
    hidden: document.getElementById('mobile-feed-headers-posts') ? document.getElementById('mobile-feed-headers-posts').clientWidth : 0
})

export const SELECT_RADIO_BUTTON = 'SELECT_RADIO_BUTTON'
export const checkRadioButton = (id) =>({
    type: SELECT_RADIO_BUTTON,
    radioId: id
})