import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import BandRegistrationForm from './band-registration-form';

export function BandRegistrationPage(props) {
    
    return (
        <div className="home">
            <h2>Register New Band</h2>
            <BandRegistrationForm />
            {/* <Link to="/">Login</Link> */}
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);