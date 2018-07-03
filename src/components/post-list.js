import React from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/post-list'

import './post-list.css';

export class PostList extends React.Component {


    componentDidMount(){
        this.props.dispatch(fetchPosts())
    }

    render(){
        //console.log(this.props)
        //this.props.dispatch(testing())

        return(
            <div className="post-list-container">
            <h1 className="post-list-header">Recent Posts</h1>
            <ul >{this.props.posts.map((item, index) =>{
                return (
                    <li className="post-list-item" key={index}>{item.message}
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