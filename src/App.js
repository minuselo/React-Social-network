import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrap'>
                <HeaderContainer/>
                <main className="main">
                    < Navbar/>
                    < Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    < Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    < Route path='/users' render={() => <FriendsContainer/>}/>
                    < Route path='/news' component={News}/>
                    < Route path='/music' component={Music}/>
                    < Route path='/settings' component={Settings}/>
                    < Route path='/login' render={() => <Login/>}/>
                </main>
            </div>
        </BrowserRouter>

    );
}


export default App;
