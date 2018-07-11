import React from 'react';
import { connect } from 'react-redux';
import {hideModal} from '../../actions/modals'
import {reduxForm, Field, formValueSelector} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {addEvent} from '../../actions/event-list'
import Input from '../login/input';
import {fetchLocationsSearch} from '../../actions/locations'
import './add-event-form.css';

export class AddEventForm extends React.Component {
    onSubmit(values) {
        this.props.dispatch(addEvent(values));
        this.props.dispatch(hideModal());
    }
    locFieldChange(values) {
        if(values === ''){
            values = undefined
        }
        this.props.dispatch(fetchLocationsSearch(values))
    }
    render() {
        console.log(this.props.locations)
    return (
        <form 
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
        className="event-form">
            <datalist id="locList">
            {this.props.locations.map((item, index) => {
                return (
                    <option value={item.name} key={index}/>
                )
            })}
            </datalist>
            <h1>Add Event</h1>
            <label htmlFor="title">Title</label>
            <Field name="title" id="title" type="text" component='input' validate={[required, nonEmpty]}/>
            <label htmlFor="picUrl">Pic URL</label>
            <Field name="picUrl" id="picUrl" type="text" initial component={Input} />
            <label htmlFor="description">Description</label>
            <Field name="description" id="description" type="description" initial component={Input} />
            <label htmlFor="eventDate">Event Date</label>
            <Field name="eventDate" id="eventDate" type="eventDate" initial component={Input} />
            <label htmlFor="location">Location</label>
            <Field name="location" id="location" list='locList' type="location" onChange={(e) => this.locFieldChange(e.target.value)} initial component='input' />
            <button className="add-event-submit-button" type="submit">OK</button>
            <button className="add-event-cancel-button" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </form>
    );
}}
// const selector = formValueSelector('event-form')
const mapStateToProps = state => {
    const term = state.form['event-form'] ? state.form['event-form'].values.location : undefined
    const locations = state.locations.locationsSearch
    // const term = selector(state, 'locations')
    // console.log(state.locations.locationsSearch)
    return ({
    term, locations, initialValues: {
        locations: state.locations.locationsSearch
    }   
})}

let x = reduxForm({form: 'event-form'})(AddEventForm);

x = connect(mapStateToProps)(x);

export default x;