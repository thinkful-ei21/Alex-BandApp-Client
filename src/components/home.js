
import React from 'react';

import Header from './header';
import Feeds from './feeds';
import BottomNav from './bottom-nav';

import './home.css'

export default function Home(props) {
  return (
    <div className="home">
      <Header />
      <main role="main">
        <Feeds />
        <BottomNav />
      </main>
    </div>
  );
}