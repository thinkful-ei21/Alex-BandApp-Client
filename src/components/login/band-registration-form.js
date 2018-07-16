import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerBand} from '../../actions/band';
import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
import {hideModal} from '../../actions/modals'
import Input from './input';
import asyncValidate from './asyncValidate'
import validate from './validate'
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import {connect} from 'react-redux';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');

export class BandRegistrationForm extends React.Component {
    handleChange(){
        // console.log("triggered")
    }
    onSubmit(values) {
        const {username, password, firstName, lastName, bandName, bandUrl, bannerUrl} = values;
        const newband = {username, bandName, bandUrl, bannerUrl};
        this.props.dispatch(registerBand(newband))
        .then( (res)=> {
        console.log(res)
        const band = res.id
        const user = {username, password, firstName, lastName, band}
        this.props.dispatch(registerUser(user))
        .then(() => this.props.dispatch(login(username, password)))})
        this.props.dispatch(hideModal())
        console.log(this.props.band)
    }
    render() {
        return (
            <form autocomplete="off" onChange={this.handleChange()}
                onSubmit={this.props.handleSubmit(values =>{
                    this.onSubmit(values)}
                )}>
                <label htmlFor="bandName">Band Name</label>
                <Field component={Input} type="text" name="bandName" />
                <label htmlFor="bandUrl">Band URL</label>
                <Field component={Input} type="text" name="bandUrl" />
                <label htmlFor="bannerUrl">Banner URL</label>
                <Field component={Input} type="text" name="bannerUrl" />
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]
                    }

                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
                <button className="btn" onClick={() => this.props.dispatch(hideModal())}>Cancel</button>
            </form>
        );
    }
}

const mapStateToProps = state => 
    ({
    band: state.band.band,
});

let x = reduxForm({
    form: 'band-registration',
    validate,
    asyncValidate,
    asyncBlurFields: ['username', 'bandName', 'bandUrl'],
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('band-registration', Object.keys(errors)[0]))
})(BandRegistrationForm);

x = connect(mapStateToProps)(x);

export default x;