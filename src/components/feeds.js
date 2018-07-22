import React from 'react';
import {checkMobileFeedHidden} from '../actions/mobile-feeds'
import PostList from './posts/post-list';
import EventList from './events/event-list';
import './feeds.css';
import { connect } from 'react-redux';



export class Feeds extends React.Component {
  componentDidMount() {
    this.props.dispatch(checkMobileFeedHidden())
    console.log(document.getElementById('mobile-feed-headers-posts').clientWidth)
  }

  render() {
    console.log(this.props.hidden)
  return (
    <div className="feeds">
      <span className="mobile-feed-headers" id="mobile-feed-headers-posts" onChange={()=>{this.props.dispatch(checkMobileFeedHidden())}}>Posts</span>
      <span className="mobile-feed-headers" id="mobile-feed-headers-events">Events</span>
      <PostList />
      <EventList />
    </div>
  );
}}

const mapStateToProps = (state) => ({
  hidden: state.mobileFeeds.hidden
})

export default connect(mapStateToProps)(Feeds);