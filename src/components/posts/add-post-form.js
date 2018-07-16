import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {addPost} from '../../actions/post-list'

import './add-post-form.css';

export class AddPostForm extends React.Component {
    onSubmit(values) {
        values = {...values, band: this.props.band[0].id}
        this.props.dispatch(addPost(values, this.props.band[0]));
        this.props.dispatch(hideModal());
    }
    render() {
    return (
        <form autocomplete="off"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
        className="post-form">
            <h1>Add Post</h1>
            <section className="add-post-form-section">
            <label className="add-post-label" htmlFor="message">Message</label>
            <Field className="message-input add-post-form-fields" name="message" id="message" type="text" component="textarea" validate={[required, nonEmpty]}/>
            </section>
            <section className="add-post-form-section">
            <label htmlFor="mediaUrl">Media URL</label>
            <Field className="add-post-form-fields" name="mediaUrl" id="mediaUrl" type="text" component="input" />
            </section>
            <button className="add-post-submit-button" type="submit">OK</button>
            <button className="add-post-cancel-button" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </form>
    );
}}

const mapStateToProps = state => ({
    band: state.band.band
})

let x = reduxForm({form: 'contact'})(AddPostForm);

x = connect(mapStateToProps)(x);

export default x;