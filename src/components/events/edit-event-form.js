import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {editEvent, fetchEvent} from '../../actions/event-list'

import './edit-event-form.css';

export class EditEventForm extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchEvent(this.props.id))
    }
    onSubmit(values) {
        this.props.dispatch(editEvent(this.props.id, values));
        this.props.dispatch(hideModal());
    }

    render() {
    return (
        <form 
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
        className="edit-form" >
            <h1>Edit Event</h1>
            <label htmlFor="title">Title</label>
            <Field name="title" id="title" type="text" component="input" validate={[required, nonEmpty]}/>
            <label htmlFor="picUrl">Pic URL</label>
            <Field name="picUrl" id="picUrl" type="text" initial component="input" />
            <label htmlFor="description">Description</label>
            <Field name="description" id="description" type="description" initial component="input" />
            <label htmlFor="eventDate">Event Date</label>
            <Field name="eventDate" id="eventDate" type="eventDate" initial component="input" />
            <label htmlFor="location">Location</label>
            <Field name="location" id="location" type="location" initial component="input" />
            <button className="btn" type="submit">OK</button>
            <button className="btn" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </form>
    );
}}

const mapStateToProps = state => ({
    initialValues: {
        title: state.events.editEvent.title,
        picUrl: state.events.editEvent.picUrl,
        description: state.events.editEvent.description,
        eventDate: state.events.editEvent.eventDate,
        location: state.events.editEvent.location
    }
  
})

let x = reduxForm({form: 'edit-event', enableReinitialize: true})(EditEventForm);

x = connect(mapStateToProps)(x);

export default x;