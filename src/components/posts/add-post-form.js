import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modals'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {addPost} from '../../actions/post-list'
import {API_BASE_URL} from '../../config';
import axios from 'axios'
import './add-post-form.css';

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

export class AddPostForm extends React.Component {

    onSubmit(values) {
        values = {...values, band: this.props.band[0].id}
        if(values.mediaUrl){
            values.mediaUrl = values.mediaUrl[0]
            const data = new FormData();
            data.append('mediaUrl', values.mediaUrl);
            axios.post(`${API_BASE_URL}/files`, data).then((response) => {
                values.mediaUrl = response.data;
                this.props.dispatch(addPost(values, this.props.band[0]));
                this.props.dispatch(hideModal());
                })
        }
        else {
            this.props.dispatch(addPost(values, this.props.band[0]));
            this.props.dispatch(hideModal());
        }
    }
        
    render() {
    return (
        <form autoComplete="off"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}
        className="post-form">
            <h1>Add Post</h1>
            <section className="add-post-form-section">
            <label className="add-post-label" htmlFor="message">Message</label>
            <Field className="message-input add-post-form-fields" name="message" id="message" type="text" component="textarea" validate={[required, nonEmpty]}/>
            </section>
            <section className="add-post-form-section">
            <label htmlFor="mediaUrl">Upload Media</label>
            <Field className="add-post-form-fields" name="mediaUrl" id="mediaUrl" type="file" component={file_upload}/>
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