import React from 'react';
import {Form, Field} from 'react-final-form';
import {maxSymbolsCreator, required} from "../common/validation/validation";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {FORM_ERROR} from "final-form";
import s from './login.module.css';


const maxLenght20 = maxSymbolsCreator(20);
const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);


const LoginForm = (props) => {

    let onSubmit = (e) => {
        props.login(e.login, e.pass, e.rememberMe);
        if (props.isErrored) {
            return {[FORM_ERROR]: "Login Failed"};
        }

    }

    return <Form
        onSubmit={onSubmit}
        render={({handleSubmit, submitError}) => (
            <form onSubmit={handleSubmit}>
                <h3>Войти</h3>
                <Field name="login" validate={composeValidators(required, maxLenght20)}>
                    {
                        ({input, meta}) => (
                            <div>
                                <input type="text" placeholder="Введите логин" {...input}/>
                                {meta.error && meta.touched && <span className={s.errored}>{meta.error}</span>}
                            </div>
                        )
                    }
                </Field>
                <Field name="pass" validate={composeValidators(required, maxLenght20)}>
                    {
                        ({input, meta}) => (
                            <div>
                                <input type="password" placeholder="Введите пароль" {...input}/>
                                {meta.error && meta.touched && <span className={s.errored}>{meta.error}</span>}
                            </div>
                        )
                    }
                </Field>
                <div className={s.remember}>
                    <Field name="rememberMe" component="input" type="checkbox"/>
                    <span>запомнить меня</span>
                </div>
                {submitError && <div>{submitError}</div>}
                <div>
                    <button type="submit">Войти</button>
                </div>
            </form>
        )}
    />
}


const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return <div className={s.form}><LoginForm isErrored={props.isErrored} login={props.login}/></div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isErrored: state.auth.isErrored
})

export default connect(mapStateToProps, {login})(Login);