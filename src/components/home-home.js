import React from 'react';
import {showModal} from '../actions/modals'
import Header from './header';
import Feeds from './feeds';
import BottomNav from './nav/bottom-nav';
import { connect } from 'react-redux';

import './home-home.css'

export function HomeHome(props) {
  return (
    <div className="home">
      <main role="main">
        <div className="band-list">
        <h1>Band List</h1>
        </div>
        <div className="register-band">
        <button>register Band</button>
        </div>
      </main>
    </div>
  );
}

export default connect()(HomeHome);