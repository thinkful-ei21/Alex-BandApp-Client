import React from 'react';
import {connect} from 'react-redux';

//import {} from '../action/top-nav';

import './top-nav.css';

export function TopNav(props) {
    return (
        <nav>
            <ul className="navList">
                <li>
                    <a href="#" id="the-music" className="navLink" aria-label="Music Page">
                        The Music
                    </a>
                </li>
                <li>
                    <a href="#" className="navLink" aria-label="About the band">
                        About The Band
                    </a>
                </li>
                <li>
                    <a href="#" className="navLink" aria-label="Calendar page">
                        Calendar
                    </a>
                </li>
                <li>
                    <a href="#" className="navLink" aria-label="Pictures Page">
                        Pics
                    </a>
                </li>
                <li>
                    <a href="#" className="navLink" aria-label="Video Page">
                        Videos
                    </a>
                </li>
                <li>
                    <a href="#" className="navLink" aria-label="Connect Page">
                        Connect
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default connect()(TopNav);

