import React from 'react';
import {hideModal} from '../actions/modals'
import { connect } from 'react-redux';

import './coming-soon.css'

export function ComingSoon(props) {
  return (
    <div className="coming-soon-container">
      <section className="coming-soon-section">
      <h1>COMING SOON!</h1>
      <button onClick={() => props.dispatch(hideModal())}>Close</button>
      </section>
    </div>
  );
}

export default connect()(ComingSoon);