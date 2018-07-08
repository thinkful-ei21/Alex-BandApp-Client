import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {addEvent} from '../actions/event-list'

import './add-event-form.css';

export class AddEventForm extends React.Component {
    onSubmit(values) {
        this.props.dispatch(addEvent(values));
        this.props.dispatch(hideModal());
    }
    render() {
    return (
        <form 
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
        className="event-form">
            <h1>Add Post</h1>
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

let x = reduxForm({form: 'event-form'})(AddEventForm);

x = connect()(x);

export default x;