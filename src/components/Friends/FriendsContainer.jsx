import React from 'react';
import {connect} from 'react-redux';
import {
    followDeleteFriend, followPostFriend,
    getUsers, isFetchingFollow,
    ToggleFriend
} from '../../redux/friendsReducer';
import Friends from './Friends';

class FriendsAPI extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.pageNumber,this.props.pageSize);
    }


    setNewPageNumber = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    }

    render() {
        return <Friends count={this.props.count}
                        pageSize={this.props.pageSize}
                        Friends={this.props.Friends}
                        ToggleFriend={this.props.ToggleFriend}
                        setNewPageNumber={this.setNewPageNumber}
                        pageNumber={this.props.pageNumber}
                        isLoading={this.props.isLoading}
                        followIsFetching={this.props.followIsFetching}
                        isFetchingFollow={this.props.isFetchingFollow}
                        followDeleteFriend={this.props.followDeleteFriend}
                        followPostFriend={this.props.followPostFriend}
        />

    }
}


const mapStateToProps = (state) => {
    return {
        Friends: state.friendsPage.Friends,
        pageSize: state.friendsPage.pageSize,
        pageNumber: state.friendsPage.pageNumber,
        count: state.friendsPage.count,
        isLoading: state.friendsPage.isLoading,
        followIsFetching: state.friendsPage.followIsFetching
    }
}


const FriendsContainer = connect(mapStateToProps, {
    ToggleFriend,
    isFetchingFollow,
    getUsers,
    followDeleteFriend,
    followPostFriend
})(FriendsAPI);

export default FriendsContainer;