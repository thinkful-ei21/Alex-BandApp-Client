import React from 'react';
import {connect} from 'react-redux';
import {showModal} from '../actions/modals'
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './bottom-nav.css';

export function BottomNav(props) {
    return (
        <nav className="bottom-nav">
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
                {(() => { if (props.loggedIn) { 
                    return <button className="btn" onClick={() => {
                        props.dispatch(clearAuth())
                        clearAuthToken()
                        }}>Logout</button>
                }else {
                    return <button className="btn" onClick={() => props.dispatch(showModal("login-page"))}>Band Login</button>
                }})()}
                </li>
                <li>
                    <button className="btn" onClick={() => props.dispatch(showModal("registration-page"))}>Registration Form</button>
                </li>
            </ul>
        </nav>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(BottomNav);