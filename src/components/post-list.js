import React from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/post-list'
import {showModal} from '../actions/modals'

import './post-list.css';

export class PostList extends React.Component {


    componentDidMount(){
        this.props.dispatch(fetchPosts())
    }

    render(){

        return(
            <div className="post-list-container">
            <h1 className="post-list-header">Recent Posts</h1>
            <button className="btn" onClick={() => this.props.dispatch(showModal("add-post-form"))}>Add Post</button>
            <ul >{this.props.posts.map((item, index) =>{
                return (
                    <li className="post-list-item" key={index}>
                    <h2>{item.message}</h2>
                    <button onClick={() => this.props.dispatch(showModal("delete-post", item.id))}>Delete</button>
                    <button onClick={() => this.props.dispatch(showModal("edit-post", item.id))}>Edit</button>
                    <img className="post-media" src={item.mediaUrl}/>
                    </li>
                )
            })}</ul>
            </div>
        )
    }

}

const mapStateToProps = state => ({
      posts:state.posts.posts,
    
  });


export default connect(mapStateToProps)(PostList);