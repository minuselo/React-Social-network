import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return <nav className={s.menu}>
		<ul>
			<li className={s.item}>
				<NavLink to="/profile" className={s.link} activeClassName={s.active}>
					<div className={s.icon}></div>Profile</NavLink></li>
			<li className={s.item}>
				<NavLink to="/dialogs" className={s.link}  activeClassName={s.active}>
					<div className={s.icon}></div>Massages</NavLink></li>
			<li className={s.item}>
				<NavLink to="/users" className={s.link}  activeClassName={s.active}>
					<div className={s.icon}></div>Friends</NavLink></li>
			<li className={s.item}>
				<NavLink to="/news" className={s.link}  activeClassName={s.active}>
					<div className={s.icon}></div>News</NavLink></li>
			<li className={s.item}>
				<NavLink to="/music" className={s.link}  activeClassName={s.active}>
					<div className={s.icon}></div>Music</NavLink></li>
			<li className={s.item}>
				<NavLink to="/settings" className={s.link}   activeClassName={s.active}>
					<div className={s.icon}></div>Settings</NavLink></li>
		</ul>
	</nav>
}

export default Navbar;