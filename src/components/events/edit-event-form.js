import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {editEvent} from '../../actions/event-list'
import {fetchLocationsSearch} from '../../actions/locations'
import {fetchEventsByBand} from '../../actions/event-list'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './edit-event-form.css';

export class EditEventForm extends React.Component {

    locFieldChange(values) {
        if(values === ''){
            values = undefined
        }
        this.props.dispatch(fetchLocationsSearch(values))
    }
    onSubmit(values) {
        values = {...values, band: this.props.band[0].id}
        this.props.dispatch(editEvent(this.props.eventId, values, this.props.band[0]))
        
        this.props.dispatch(hideModal());
    }

    render() {
        
    return (
        <MuiThemeProvider>
        <form autoComplete="off"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
        className="event-form">
            <datalist id="locList">
            {this.props.locations.map((item, index) => {
                return (
                    <option key={item.id} value={item.name} />
                )
            })}
            </datalist>
            <h1>Edit Event</h1>
            <section className="add-event-form-section">
            <label htmlFor="title">Title</label>
            <Field className="add-event-form-fields" name="title" id="title" type="text" component='input' validate={[required, nonEmpty]}/>
            </section>
            <section className="add-event-form-section">
            <label htmlFor="picUrl">Pic URL</label>
            <Field className="add-event-form-fields" name="picUrl" id="picUrl" type="text" initial component='input' />
            </section>
            <section className="add-event-form-section">
            <label htmlFor="description">Description</label>
            <Field className="add-event-form-fields" name="description" id="description" type="description" initial component='input' />
            </section>
            <section className="add-event-form-section">
            <label htmlFor="eventDate" className="event-date-label">Event Date</label>
            <Field className="add-event-form-fields" name="eventDate" id="eventDate" initial component="input" type="datetime-local" />
            </section>
            <section className="add-event-form-section">
            <label htmlFor="location">Location</label>
            <Field className="add-event-form-fields" name="location" id="location" list='locList' type="location" onChange={(e) => this.locFieldChange(e.target.value)} initial component='input' />
            </section>
            <button className="add-event-submit-button" type="submit">OK</button>
            <button className="add-event-cancel-button" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </form>
        </MuiThemeProvider>
    );
}}

const mapStateToProps = state => {
    const term = state.form['event-form'] ? state.form['event-form'].values.location : undefined
    const locations = state.locations.locationsSearch
    const band = state.band.band
    const eventId = state.events.events[state.events.eventEditIndex].id
    return ({
        eventId, term, locations, band, initialValues: {
        title: state.events.events[state.events.eventEditIndex].title,
        picUrl: state.events.events[state.events.eventEditIndex].picUrl,
        description: state.events.events[state.events.eventEditIndex].description,
        eventDate: state.events.events[state.events.eventEditIndex].eventDate.toString().slice(0, -8),
        location: state.events.events[state.events.eventEditIndex].location[0].name,
        locations: state.locations.locationsSearch,
        
    }
  
})}

let x = reduxForm({form: 'edit-event', enableReinitialize: false})(EditEventForm);

x = connect(mapStateToProps)(x);

export default x;