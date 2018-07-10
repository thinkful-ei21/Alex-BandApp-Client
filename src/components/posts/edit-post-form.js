import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {editPost, fetchPost} from '../../actions/post-list'

import './add-post-form.css';

export class EditPostForm extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchPost(this.props.id))
    }
    onSubmit(values) {
        this.props.dispatch(editPost(this.props.id, values));
        this.props.dispatch(hideModal());
    }

    render() {
    return (
        <form 
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
        className="post-form" >
            <h1>Edit Post</h1>
            <label htmlFor="message">Message</label>
            <Field name="message" id="message" type="text" component="input" validate={[required, nonEmpty]}/>
            <label htmlFor="mediaUrl">Media URL</label>
            <Field name="mediaUrl" id="mediaUrl" type="text" initial component="input" />
            <button className="btn" type="submit">OK</button>
            <button className="btn" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </form>
    );
}}

const mapStateToProps = state => ({
    initialValues: {
        message: state.posts.editPost.message,
        mediaUrl: state.posts.editPost.mediaUrl
    }
  
})

let x = reduxForm({form: 'edit-post', enableReinitialize: true})(EditPostForm);

x = connect(mapStateToProps)(x);

export default x;