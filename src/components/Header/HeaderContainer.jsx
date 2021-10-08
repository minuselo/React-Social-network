import React from 'react';
import Header from "./Header";
import {authenticationUser, logout, SetUserLoginData} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authenticationUser()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login,
    email:state.auth.email
});


export default connect(mapStateToProps, {SetUserLoginData,authenticationUser,logout})(HeaderContainer);