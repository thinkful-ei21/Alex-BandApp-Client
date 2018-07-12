import React from 'react';
import {connect} from 'react-redux';

import BandRegistrationForm from './band-registration-form';

import './band-reg-page.css'

export function BandRegistrationPage(props) {
    
    return (
        <div className="home band-reg-page">
            <h2>Register New Band</h2>
            <BandRegistrationForm />
            {/* <Link to="/">Login</Link> */}
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(BandRegistrationPage);