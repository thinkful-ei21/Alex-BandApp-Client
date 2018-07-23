import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddPostForm from './posts/add-post-form'
import DeletePostForm from './posts/delete-post-confirm'
import EditPostForm from './posts/edit-post-form'
import AddEventForm from './events/add-event-form'
import DeleteEventForm from './events/delete-event-confirm'
import EditEventForm from './events/edit-event-form'
import RegistrationPage from './login/registration-page'
import LoginPage from './login/login-form'
import BandRegistrationPage from './login/band-registration-page'
import ComingSoon from './coming-soon'
import LandingPage from './landing-page'
import {setEventEditIndex} from '../actions/event-list'

import './modal.css'

class Modal extends Component {
  setPage() {
    if (this.props.page === 'add-post-form'){
      return <AddPostForm />
    } 
    else if (this.props.page === 'delete-post'){
      return <DeletePostForm id={this.props.id}/> 
    }
    else if (this.props.page === 'edit-post'){
      return <EditPostForm id={this.props.id}/> 
    }
    else if (this.props.page === 'add-event-form'){
      return <AddEventForm />
    }
    else if (this.props.page === 'delete-event'){
      return <DeleteEventForm id={this.props.id}/> 
    }
    else if (this.props.page === 'edit-event'){
      this.props.dispatch(setEventEditIndex(this.props.id))
      return <EditEventForm id={this.props.id}/> 
    }
    else if (this.props.page === 'registration-page'){
      return <RegistrationPage /> 
    }
    else if (this.props.page === 'login-page'){
      return <LoginPage /> 
    }
    else if (this.props.page === 'band-registration-page'){
      return <BandRegistrationPage /> 
    }
    else if (this.props.page === 'coming-soon'){
      return <ComingSoon /> 
    }
    else if (this.props.page === 'landing-page'){
      return <LandingPage />
    }
  }
  render() {

    return (
      <div className="modal">
        { this.props.isShowing &&
          <div>
            <div className="modal-backdrop"></div>
            <div className="confirm-modal-content">
            {this.setPage()} 
            </div>
          </div>
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isShowing: state.modals.isShowing,
    page: state.modals.page,
    id: state.modals.id
  }
}

export default connect(mapStateToProps)(Modal)