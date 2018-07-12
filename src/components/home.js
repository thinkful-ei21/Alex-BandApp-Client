import React from 'react';
import Header from './header';
import Feeds from './feeds';
import BottomNav from './nav/bottom-nav';
import { connect } from 'react-redux';

import './home.css'

export function Home(props) {
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

export default connect()(Home);