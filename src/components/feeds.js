import React from 'react';

import PostList from './post-list';
import EventList from './event-list';

export default function Feeds(props) {
  return (
    <div>
      <section className="post-section">
      <PostList />
      </section>
      <section className="event-section">
      <EventList />
      </section>
    </div>
  );
}