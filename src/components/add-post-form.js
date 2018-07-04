import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {fetchPosts} from '../actions/post-list'
import { API_BASE_URL } from '../config';

//import {} from '../action/bottom-nav';

import './add-post-form.css';

export class AddPostForm extends React.Component {
    onSubmit(values) {
        return fetch(`${API_BASE_URL}/posts`,{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => !res.ok ? Promise.reject(res.statusText) : res.json())
        .then(this.props.dispatch(fetchPosts()))
        .then(this.props.dispatch(hideModal()))
        .catch(err => console.log(err))
        //console.log(values);
        //props.dispatch(addPost(values))
        //this.props.dispatch(hideModal())
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
            <button className="btn" type="submit">OK</button>
            <button className="btn" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </form>
    );
}}

const mapDispatchToProps = () => {
    return {
      hideModal: hideModal,
      fetchPosts: fetchPosts
    }
}

export default reduxForm({form: 'contact'})(AddPostForm);