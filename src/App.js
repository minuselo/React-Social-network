import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";



const App = () => {
	return (
		<div className='wrap'>
			<Header />
			<main className="main">
				< Navbar />
				{/*< Profile />*/}
				< Dialogs />
			</main>
		</div>
	);
}


export default App;
