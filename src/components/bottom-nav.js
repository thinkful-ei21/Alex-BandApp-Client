import React from 'react';
import {connect} from 'react-redux';

import {} from '../action/bottom-nav';

import './bottom-nav.css';

export function BottomNav(props) {
    return (
        <nav>
            <ul className="navList">
                <li>
                    <a href="#" className="navLink" aria-label="link to facebook page">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="#" className="navLink" aria-label="link to twitter page">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="#" className="navLink band-login" aria-label="Band login page">
                        Band Login
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default connect()(BottomNav);