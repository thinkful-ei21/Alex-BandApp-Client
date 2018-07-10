import React from 'react';
import {hideModal} from '../../actions/modals'
import {deletePost} from '../../actions/post-list'
import {connect} from 'react-redux';
import './delete-post-confirm.css';

export class DeletePostForm extends React.Component {
    
render(){
return (
    <div
        className="post-form">
            <h1>Are you sure you want to delete this post?</h1>
            <button className="btn" onClick={() => {
                this.props.dispatch(deletePost(this.props.id))
                this.props.dispatch(hideModal())
                }}>OK</button>
            <button className="btn" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
        </div>
  );
}}

export default connect()(DeletePostForm);