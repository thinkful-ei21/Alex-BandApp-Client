import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
import {hideModal} from '../../actions/modals'
import asyncValidate from './asyncValidate'
import Input from './input';
import validate from './validate'
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import {connect} from 'react-redux';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        console.log (this.props.band)
        const user = {username, password, firstName, lastName, band: this.props.band[0].id};
        this.props.dispatch(registerUser(user))
        .then(() => this.props.dispatch(login(username, password)))
        this.props.dispatch(hideModal())
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
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
    band:state.band.band,
});

let x = reduxForm({
    form: 'registration',
    validate,
    asyncValidate,
    asyncBlurFields: ['username'],
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);

x = connect(mapStateToProps)(x);

export default x;