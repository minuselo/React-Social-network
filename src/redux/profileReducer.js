const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

let initialState = {
    Posts: [
        {id: 0, text: "Пост под номером один", likeCount: 5},
        {id: 1, text: "Пост про что-то там", likeCount: 14},
        {id: 2, text: "Пост про ыыыыы", likeCount: 165}
    ],
    NewPostText: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                Posts:[...state.Posts,{
                    id: 5,
                    text: state.NewPostText,
                    likeCount: 0
                }],
                NewPostText:''
            };
        }
        case UPDATE_TEXT: {
            return {
                ...state,
                NewPostText:action.NewText
            };
        }
        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({
    type: ADD_POST
})

export const UpdateTextActionCreator = (NewText) => ({
    type: UPDATE_TEXT,
    NewText: NewText
})

export default profileReducer;