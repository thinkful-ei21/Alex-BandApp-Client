import React from 'react';
import {hideModal} from '../actions/modals'
import { connect } from 'react-redux';

import './coming-soon.css'

const iframeStyle = {
  width: '100%',
  height: '120px',
  border: '0',
  position: 'absolute',
}

export function ComingSoon(props) {
  return (
    <div className="coming-soon-container">
      <section className="coming-soon-section">
      <h1>COMING SOON!</h1>
      <div>
        <iframe style={iframeStyle} src="https://bandcamp.com/EmbeddedPlayer/album=2039667386/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless>
        <a href="http://artificialstars.bandcamp.com/album/beware">Beware by Artificial Stars</a>
        </iframe>
      </div>
      <button onClick={() => props.dispatch(hideModal())}>Close</button>
      </section>
    </div>
  );
}

export default connect()(ComingSoon);