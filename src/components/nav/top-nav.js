import React from 'react';
import {connect} from 'react-redux';
import {showModal} from '../../actions/modals'

//import {} from '../action/top-nav';

import './top-nav.css';

export function TopNav(props) {
    return (
        
        <nav className="top-nav">
            <ul className="navList">
                <li>
                    <span onClick={() => props.dispatch(showModal("coming-soon"))} id="the-music" className="navLink" aria-label="Music Page">
                        The Music
                    </span>
                </li>
                <li>
                    <span onClick={() => props.dispatch(showModal("coming-soon"))} className="navLink" aria-label="About the band">
                        About The Band
                    </span>
                </li>
                <li>
                    <span onClick={() => props.dispatch(showModal("coming-soon"))} className="navLink" aria-label="Calendar page">
                        Calendar
                    </span>
                </li>
                <li>
                    <span onClick={() => props.dispatch(showModal("coming-soon"))} className="navLink" aria-label="Pictures Page">
                        Pics
                    </span>
                </li>
                <li>
                    <span onClick={() => props.dispatch(showModal("coming-soon"))} className="navLink" aria-label="Video Page">
                        Videos
                    </span>
                </li>
                <li>
                    <span onClick={() => props.dispatch(showModal("coming-soon"))} className="navLink" aria-label="Connect Page">
                        Connect
                    </span>
                </li>
            </ul>
            <div className="swipe-overlay-container">
                <div className="swipe-overlay">SWIPE &larr; </div>
            </div>
        </nav>
       
    );
}

export default connect()(TopNav);

