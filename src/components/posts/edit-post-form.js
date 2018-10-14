import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {editPost, fetchPost} from '../../actions/post-list'
import {API_BASE_URL} from '../../config';
import axios from 'axios'
import './edit-post-form.css';

const file_upload= ({ input, type, meta: { touched, error, warning } }) => {
    delete input.value
    return (
      <div>
        <label htmlFor={input.name}>
          <input {...input} type={type} accept="image/*"/>
        </label>
      </div>
    )
}

export class EditPostForm extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchPost(this.props.id))
    }
    onSubmit(values) {
        values = {...values, band: this.props.band[0].id}
        this.props.dispatch(editPost(this.props.id, values, this.props.band[0]));
        this.props.dispatch(hideModal());
    }

    render() {
    return (
        <form autoComplete="off"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
        className="post-form" >
            <h1>Edit Post</h1>
            <section className="edit-post-form-section">
            <label className="edit-post-label" htmlFor="message">Message</label>
            <Field className="message-input edit-post-form-fields" name="message" id="message" type="text" component="textarea" validate={[required, nonEmpty]}/>
            </section>
            <section className="edit-post-form-section">
            <label htmlFor="mediaUrl">Media URL</label>
            <Field className="edit-post-form-fields" name="mediaUrl" id="mediaUrl" type="text" initial component="input" placeholder="optional"/>
            </section>
            <button className="edit-post-submit-button" type="submit">OK</button>
            <button className="edit-post-cancel-button" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </form>
    );
}}

const mapStateToProps = state => {
    const band = state.band.band
    return ({band,
    initialValues: {
        message: state.posts.editPost.message,
        mediaUrl: state.posts.editPost.mediaUrl,
        
    }})}
  

let x = reduxForm({form: 'edit-post', enableReinitialize: true})(EditPostForm);

x = connect(mapStateToProps)(x);

export default x;