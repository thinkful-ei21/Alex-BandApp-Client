
import React from 'react';

import Header from './header';
import Feeds from './feeds';
import BottomNav from './bottom-nav';

export default function Home(props) {
  return (
    <div>
      <Header />
      <main role="main">
        <Feeds />
        <BottomNav />
      </main>
    </div>
  );
}