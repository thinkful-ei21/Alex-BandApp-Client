import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddPostForm from './add-post-form'
import './modal.css'

class Modal extends Component {
  render() {

    return (
      <div className="modal">
        { this.props.isShowing &&
          <div>
            <div className="modal-backdrop"></div>
            <div className="confirm-modal-content">
            <AddPostForm />  
            </div>
          </div>
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isShowing: state.modals.isShowing
  }
}

export default connect(mapStateToProps)(Modal)