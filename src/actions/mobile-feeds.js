export const MOBILE_FEED_HIDDEN = 'MOBILE_FEED_HIDDEN'
export const checkMobileFeedHidden = () =>({
    type: MOBILE_FEED_HIDDEN,
    hidden: document.getElementById('mobile-feed-headers-posts').clientWidth
})