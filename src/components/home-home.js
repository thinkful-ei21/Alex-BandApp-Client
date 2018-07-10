import React from 'react';
import {showModal} from '../actions/modals'
import BottomNav from './nav/bottom-nav';
import { connect } from 'react-redux';
import Modal from './modal'
import './home-home.css'

export class HomeHome extends React.Component {
  render(){
  return (
    <div className="home">
      <main role="main">
        <div className="band-list">
        <h1>Band List</h1>
        </div>
        <div className="register-band">
        <button className="register-band-button btn" onClick={() => this.props.dispatch(showModal("band-registration-page"))}>Register Band</button>
        </div>
        <Modal />
      </main>
    </div>
  );
}}

export default connect()(HomeHome);