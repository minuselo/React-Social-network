export const getFriendsData = (state) => {
    return state.friendsPage.Friends;
}
export const getPageSizeData = (state) => {
    return state.friendsPage.pageSize;
}
export const getPageNumberData = (state) => {
    return state.friendsPage.pageNumber;
}
export const getCountData = (state) => {
    return state.friendsPage.count;
}
export const getIsLoadingData=(state)=>{
    return state.friendsPage.isLoading;
}
export const getFollowIsFetchingData = (state) => {
    return state.friendsPage.followIsFetching;
}