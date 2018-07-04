import {SHOW_MODAL, HIDE_MODAL} from '../actions/modals'

export default function modals(state = {
  isShowing: false,
  page: ''
}, action) {

  switch (action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, {
        isShowing: true,
        page: action.page
      })
    case HIDE_MODAL:
      return Object.assign({}, state, {
        isShowing: false
      })
    default:
      return state
  }

}
