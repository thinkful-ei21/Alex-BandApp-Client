import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {addPost, fetchPosts} from '../actions/post-list'

import './add-post-form.css';

export class AddPostForm extends React.Component {
    onSubmit(values) {
        this.props.dispatch(addPost(values));
        this.props.dispatch(hideModal());
    }
    render() {
    return (
        <form 
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
        className="post-form">
            <h1>Add Post</h1>
            <label htmlFor="message">Message</label>
            <Field name="message" id="message" type="text" component="input" validate={[required, nonEmpty]}/>
            <label htmlFor="mediaUrl">Media URL</label>
            <Field name="mediaUrl" id="mediaUrl" type="text" component="input" />
            <button className="btn" type="submit">Login</button>
            <button className="btn" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </form>
    );
}}

let x = reduxForm({form: 'contact'})(AddPostForm);

x = connect()(x);

export default x;