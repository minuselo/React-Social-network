import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}><img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/></div>
        <div className={s.loginInfo}>{props.isAuth ?<div className={s.login}><h3>{props.login}</h3>
            <p>email:<span>{props.email}</span></p>
            <button onClick={props.logout}>Выйти</button></div>
            :<NavLink to='/login'>Войти</NavLink>}
        </div>
    </header>
}

export default Header;