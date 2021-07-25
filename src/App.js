import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrap'>
                <Header/>
                <main className="main">
                    < Navbar/>
                    < Route path='/dialogs' render={()=><Dialogs UsersElements={props.UsersElements} MessagesElements={props.MessagesElements} /> }/>
                    < Route path='/profile' render={() => <Profile PostsElements={props.PostsElements} />}/>
                    < Route path='/news' component={News}/>
                    < Route path='/music' component={Music}/>
                    < Route path='/settings' component={Settings}/>
                </main>
            </div>
        </BrowserRouter>

    );
}


export default App;
