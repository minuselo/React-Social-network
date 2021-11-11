import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {SetInitializedSucess} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const FriendsContainer = React.lazy(() => import("./components/Friends/FriendsContainer"));
const Login = React.lazy(() => import("./components/login/Login"));

class App extends React.Component {

    componentDidMount() {
        this.props.SetInitializedSucess();
    }


    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        } else
            return (
                <BrowserRouter>
                    <div className='wrap'>
                        <HeaderContainer/>
                        <main className="main">
                            < Navbar/>
                            <React.Suspense fallback={Preloader}>
                                < Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                < Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                < Route path='/users' render={() => <FriendsContainer/>}/>
                                < Route path='/news' component={News}/>
                                < Route path='/music' component={Music}/>
                                < Route path='/settings' component={Settings}/>
                                < Route path='/login' render={() => <Login/>}/>
                            </React.Suspense>
                        </main>
                    </div>
                </BrowserRouter>

            );
    }
}

let mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
});

export default connect(mapStateToProps, {SetInitializedSucess})(App);
