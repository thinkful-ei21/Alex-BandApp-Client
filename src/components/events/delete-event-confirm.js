import React from 'react';
import {hideModal} from '../../actions/modals'
import {deleteEvent} from '../../actions/event-list'
import {connect} from 'react-redux';
import './delete-event-confirm.css';

export class DeleteEventForm extends React.Component {
    
render(){
return (
    <div
        className="delete-event-form">
            <h1>Are you sure you want to delete this event?</h1>
            <button className="delete-event-submit-button" onClick={() => {
                this.props.dispatch(deleteEvent(this.props.id, this.props.band[0]))
                this.props.dispatch(hideModal())
                }}>OK</button>
            <button className="delete-event-cancel-button" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </div>
  );
}}

const mapStateToProps = state => ({
    band: state.band.band
})

export default connect(mapStateToProps)(DeleteEventForm);