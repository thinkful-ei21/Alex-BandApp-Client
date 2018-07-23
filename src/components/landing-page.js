import React from 'react';
import {hideModal} from '../actions/modals'
import { connect } from 'react-redux';

import './landing-page.css'

export function LandingPage(props) {
  return (
    <div className="landing-page-container">
      <section className="landing-page-section">
      <h1>Welcome to Sioux City Music!</h1>
      <h3 className="landing-desc-header"> Sioux City Music allows local bands (local to Sioux City, IA) 
          to create a webpage for posting events and announcements that 
          are easily accessible to fans!</h3>
      <ul> Features:
          <li>Create posts and events with linkable media.</li>
          <li>Delete and edit existing posts and events.</li>
          <li>Register new bands and new band members.</li>
          <li>React-Redux frontend with custom made modal system.</li>
          <li>Intuitive and responsive mobile design </li>
      </ul>
      <ul> Future development plans:
          <li>Allow users to create locations with individual web pages.</li>
          <li>Show and filter all bands posts and events on home page.</li>
          <li>Connect page to band Facebook and Google Image accounts.</li>
          <li>Improved styling.</li>
          <li>Multiple Cities!!</li>
      </ul>
      <button onClick={() => props.dispatch(hideModal())}>Close</button>
      </section>
    </div>
  );
}

export default connect()(LandingPage);