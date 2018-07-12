import React from 'react';
import { connect } from 'react-redux';
import {hideModal} from '../../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {addEvent} from '../../actions/event-list'
import {fetchLocationsSearch} from '../../actions/locations'
import { DatePicker } from 'redux-form-material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './add-event-form.css';

export class AddEventForm extends React.Component {
    onSubmit(values) {
        values = {...values, band: this.props.band[0].id}
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
    return (
        <MuiThemeProvider>
        <form 
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
            <h1>Add Event</h1>
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
            <section className="add-event-date-form-section">
            <label htmlFor="eventDate" className="event-date-label">Event Date</label><div className="date-div">
            <Field className="add-event-form-fields event-date" name="eventDate" id="eventDate" format={null} initial component={DatePicker} />
            </div>
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
// const selector = formValueSelector('event-form')
const mapStateToProps = state => {
    const term = state.form['event-form'] ? state.form['event-form'].values.location : undefined
    const locations = state.locations.locationsSearch
    const band = state.band.band
    return ({
    term, locations, band, initialValues: {
        locations: state.locations.locationsSearch
    }   
})}

let x = reduxForm({form: 'event-form'})(AddEventForm);

x = connect(mapStateToProps)(x);

export default x;