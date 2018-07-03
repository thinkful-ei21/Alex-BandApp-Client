import React from 'react';
import { connect } from 'react-redux';
import {fetchPostList} from '../actions/post-list'

import './post-list.css';

export class PostList extends React.Component {


    componentDidMount(){
        this.props.dispatch(fetchPostList())
    }

    render(){
        //console.log(this.props)
        //this.props.dispatch(testing())

        return(
            <div className="post-list">
            <h1>Recent Posts</h1>
            <ul>{this.props.posts.map(item =>{
                return (
                    <li>{item}</li>
                )
            })}</ul>
            </div>
        )
    }

}

const mapStateToProps = state => ({
      posts:state.posts,
    
  });

export default connect(mapStateToProps)(PostList);