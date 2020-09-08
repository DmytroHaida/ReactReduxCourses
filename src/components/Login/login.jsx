import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, FormField } from '../common/FormsControls/FormsControls';
import { requiredFild, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import { Redirect } from 'react-router-dom';
const maxLengthCreator20 = maxLengthCreator(20);
const LoginForm = (props) => {
    const {error} = props;
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='modalWindow'>
                <h2>Login: {FormField(Input, "text", "enter your Email", "email", requiredFild)}</h2>
                <h2>Password: {FormField(Input, "password", 'enter your Password',
                    'password', [requiredFild, maxLengthCreator20],)}</h2>
                {error && <div className={"FormControl error"}>{error}</div>}
                
                {props.captchaUrl && <img src={props.captchaUrl} alt="Captcha"></img>}
                {props.captchaUrl &&  FormField(Input,'text','image symbols', 'captcha', [requiredFild])}

                <div><Field component={Input} type="checkbox" name={'rememberMe'} />remember me</div>

                <button>Submit</button>

            </div>
        </form>

    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}
        captchaUrl={props.captchaUrl} />
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, { login })(Login);