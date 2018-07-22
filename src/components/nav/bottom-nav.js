import React from 'react';
import {connect} from 'react-redux';
import {showModal} from '../../actions/modals'
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';

import './bottom-nav.css';

export function BottomNav(props) {
    return (
        <nav className="bottom-nav">
            <ul className="bottom-navList">
                <li className="bottom-nav-first-child">
                    <span 
                        className="navLink" aria-label="link to home" ><a href="/">
                        Home
                        </a>
                    </span>
                </li>
                {/* <li className="bottom-nav-li">
                    <span className="navLink" aria-label="link to twitter page">
                        Twitter
                    </span>
                </li> */}
                {(() => { if (props.loggedIn && props.currentBandUser) { 
                    return <div className="inline-div"><li className="bottom-nav-li">
                        <span className="btn" onClick={() => {
                        props.dispatch(clearAuth())
                        clearAuthToken()
                        }}>Logout</span>
                        </li>
                        <li className="bottom-nav-li">
                        <span  className="navLink navlink-register-band-member" onClick={() => props.dispatch(showModal("registration-page"))}>New Band Member</span>
                    </li></div>
                    }
                    else {
                    return <li className="bottom-nav-li">
                        <span  className="navLink" onClick={() => props.dispatch(showModal("login-page"))}>Band Login</span>
                        </li>
                }})()}
            </ul>
        </nav>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentBandUser: state.auth.currentUser !== null && state.band.band[0].id === state.auth.currentUser.band[0] ? true : false
});

export default connect(mapStateToProps)(BottomNav);