import React from 'react';
import {checkMobileFeedHidden, checkRadioButton} from '../actions/mobile-feeds'
import PostList from './posts/post-list';
import EventList from './events/event-list';
import './feeds.css';
import { connect } from 'react-redux';



export class Feeds extends React.Component {
  componentDidMount() {
    this.props.dispatch(checkMobileFeedHidden())
    // console.log(this.props.hidden)
  }

  render() {
    console.log(this.props.hidden)
  return (
    <div className="feeds">
      <div className="mobile-feed-container">
      <input type="radio" id="tab-1" name="tab-group-1" defaultChecked onClick={(e)=>{this.props.dispatch(checkRadioButton(e.target.id))}}/>
      <label className="mobile-feed-headers" id="mobile-feed-headers-posts" htmlFor="tab-1">Posts</label>
      {/* <span className="mobile-feed-headers" id="mobile-feed-headers-posts" >Posts</span> */}
      </div>
      <div className="mobile-feed-container">
      <input type="radio" id="tab-2" name="tab-group-1" onClick={(e)=>{this.props.dispatch(checkRadioButton(e.target.id))}}/>
      <label className="mobile-feed-headers" id="mobile-feed-headers-events" htmlFor="tab-2" >Events</label>
      {/* <span className="mobile-feed-headers" id="mobile-feed-headers-events">Events</span> */}
      </div>
      {(() => {
        if (this.props.hidden > 0) {
            if (this.props.radioId === "tab-1") {
              return <PostList />
            }
            else if (this.props.radioId === "tab-2") {
              return <EventList />
            }
        }
        else {
          return (<div><PostList />
          <EventList /></div>)
        }
      })()}
    </div>
  );
}}

const mapStateToProps = (state) => ({
  hidden: state.mobileFeeds.hidden,
  radioId: state.mobileFeeds.radioId
})

export default connect(mapStateToProps)(Feeds);