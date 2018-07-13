import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsByBand } from '../../actions/post-list'
import { showModal } from '../../actions/modals'

import './post-list.css';

export class PostList extends React.Component {


    componentDidMount() {
        this.props.dispatch(fetchPostsByBand(this.props.band[0]))
    }
    componentDidUpdate() {
        // this.props.dispatch(fetchPostsByBand(this.props.band[0]))
    }
    render() {
        return (

            <div className="actual-post-list-container">
                <h1 className="post-list-header">Recent Posts</h1>
                <div className="post-list-container">
                    {(() => {
                        if (this.props.loggedIn && this.props.currentBandUser) {
                            return <button className="btn" onClick={() => this.props.dispatch(showModal("add-post-form"))}>Add Post</button>
                        }
                    })()}
                    <ul className="post-list-ul">{this.props.posts.map((item, index) => {
                        return (
                            <li className="post-list-item" key={index}>
                                <h2>{item.message}</h2>
                                {(() => {
                                    if (this.props.loggedIn && this.props.currentBandUser) {
                                        return <button onClick={() => this.props.dispatch(showModal("delete-post", item.id))}>Delete</button>
                                    }
                                })()}
                                {(() => {
                                    if (this.props.loggedIn && this.props.currentBandUser) {
                                        return <button onClick={() => this.props.dispatch(showModal("edit-post", item.id))}>Edit</button>
                                    }
                                })()}
                                <img alt="" className="post-media" src={item.mediaUrl} />
                                <span>Posted: {new Date(item.createdAt).toLocaleString()}</span>
                            </li>
                        )
                    })}</ul>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    loggedIn: state.auth.currentUser !== null,
    currentBandUser: state.auth.currentUser !== null && state.band.band[0].id === state.auth.currentUser.band[0] ? true : false,
    band: state.band.band
});


export default connect(mapStateToProps)(PostList);