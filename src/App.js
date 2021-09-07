import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrap'>
                <Header/>
                <main className="main">
                    < Navbar/>
                    < Route path='/dialogs' render={()=><DialogsContainer/> }/>
                    < Route path='/profile' render={() => <Profile/>}/>
                    < Route path='/users' render={() => <FriendsContainer/>}/>
                    < Route path='/news' component={News}/>
                    < Route path='/music' component={Music}/>
                    < Route path='/settings' component={Settings}/>
                </main>
            </div>
        </BrowserRouter>

    );
}


export default App;
