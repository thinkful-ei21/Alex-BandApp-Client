import React from 'react';

import PostList from './post-list';
import EventList from './event-list';
import './feeds.css';

export default function Feeds(props) {
  return (
    <div className="feeds">
      
      <PostList />
      
      
      <EventList />
      
    </div>
  );
}