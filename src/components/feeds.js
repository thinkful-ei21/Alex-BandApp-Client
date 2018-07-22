import React from 'react';

import PostList from './posts/post-list';
import EventList from './events/event-list';
import './feeds.css';

export default function Feeds(props) {
  return (
    <div className="feeds">
      <span className="mobile-feed-headers">Posts</span>
      <span className="mobile-feed-headers">Events</span>
      <PostList />
      <EventList />
    </div>
  );
}