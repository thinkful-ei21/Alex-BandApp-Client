
import React from 'react';
import {showModal} from '../actions/modals'
import Header from './header';
import Feeds from './feeds';
import BottomNav from './bottom-nav';
import { connect } from 'react-redux';

import './home.css'

export function Home(props) {
  return (
    <div className="home">
      <Header />
      <button className="btn" onClick={() => props.dispatch(showModal("registration-page"))}>Registration Form</button>
      <main role="main">
        <Feeds />
        <BottomNav />
      </main>
    </div>
  );
}

export default connect()(Home);