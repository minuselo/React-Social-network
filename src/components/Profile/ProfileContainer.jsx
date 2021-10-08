import React from 'react';
import Profile from "./Profile";
import {getStatus, ProfileSet, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthorizedRedirect} from "../HOC/withAuthorizedRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.ProfileSet(this.props.match.params.userId, this.props.UserDefaultId);
        this.props.getStatus(this.props.match.params.userId, this.props.UserDefaultId);
    }

    render() {

        return <Profile {...this.props}/>
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.Profile,
    UserDefaultId: state.auth.id,
    status:state.profilePage.status
});




export default compose(
    connect(mapStateToProps, {ProfileSet,getStatus,updateStatus}),
    withRouter,
    withAuthorizedRedirect
)(ProfileContainer);