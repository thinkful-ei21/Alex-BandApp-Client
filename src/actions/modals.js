export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export function showModal(page) {
  return {
    type: SHOW_MODAL,
    page
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}

