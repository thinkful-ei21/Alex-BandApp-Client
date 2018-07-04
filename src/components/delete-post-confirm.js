import React from 'react';
import {hideModal} from '../actions/modals'
import {deletePost} from '../actions/post-list'
import {connect} from 'react-redux';
import './delete-post-confirm.css';

export function DeletePostForm(props) {
    console.log(props.id)
  return (
    <div
        className="post-form">
            <h1>Are you sure you want to delete this post?</h1>
            <button className="btn" onClick={() => {
                props.dispatch(deletePost(props.id))
                props.dispatch(hideModal())
                }}>OK</button>
            <button className="btn" onClick={() => props.dispatch(hideModal())}>Cancel</button>
        </div>
  );
}

export default connect()(DeletePostForm);