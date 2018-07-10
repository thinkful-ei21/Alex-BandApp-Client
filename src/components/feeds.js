import React from 'react';

import PostList from './posts/post-list';
import EventList from './events/event-list';
import './feeds.css';

export default function Feeds(props) {
  return (
    <div className="feeds">
      <PostList />
      <EventList />
    </div>
  );
}