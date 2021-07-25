import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return <nav className={s.menu}>
		<ul>
			<li className={s.item}>
				<div className={s.icon}></div>
				<NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
			<li className={s.item}>
				<div className={s.icon}></div>
				<NavLink to="/dialogs" activeClassName={s.active}>Massages</NavLink></li>
			<li className={s.item}>
				<div className={s.icon}></div>
				<NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
			<li className={s.item}>
				<div className={s.icon}></div>
				<NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
			<li className={s.item}>
				<div className={s.icon}></div>
				<NavLink to="/settings"  activeClassName={s.active}>Settings</NavLink></li>
		</ul>
	</nav>
}

export default Navbar;