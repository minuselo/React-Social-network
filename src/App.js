import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = () => {
	return (
		<div className='wrap'>
			<Header />
			<main className="main">
				< Navbar />
				< Profile />
			</main>
		</div>
	);
}


export default App;
