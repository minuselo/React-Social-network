const TOGGLE_FRIEND = 'TOGGLE-FRIEND';
const ADD_FRIENDS = 'Add-Friends';

let initialState = {
Friends:[

]
}


const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FRIEND:{
            return {
                ...state,
                Friends: state.Friends.map(el=>{
                    if (el.id===action.userId) {
                        return {...el, friended: !el.friended};
                    }
                    return el;
            })
            }
        }
        case ADD_FRIENDS:{
            return {
                ...state,
                Friends:action.Friends
            }
        }
        default:
            return state;
    }
}

export const ToggleFriendAC = (userId) => ({
    type: TOGGLE_FRIEND,
    userId
})
export const AddFriendsAC=(Friends)=>({
    type:ADD_FRIENDS,
    Friends
})

export default friendsReducer;