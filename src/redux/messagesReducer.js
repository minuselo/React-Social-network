const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE='UPDATE-TEXT-MESSAGE';

let initialState={
    Users: [{id: 1, name: 'Friend1'},
        {id: 2, name: 'Friend2'},
        {id: 3, name: 'Friend3'},
        {id: 4, name: 'Friend4'},
        {id: 5, name: 'Friend5'}],
    Messages: [
        {
            id: 0,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut dolor quidem sequi!' +
                ' Aspernatur blanditiis dignissimos, dolore, eligendi esse excepturi exercitationem in magnammodi' +
                ' necessitatibus nobis obcaecati perspiciatis provident.',
            author: 'Friend4'
        },
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', author: 'Me'},
        {
            id: 2,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.t',
            author: 'Me'
        }]
}


const messagesReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                Messages:[...state.Messages,{
                    id: 3,
                    message: action.message,
                    author: 'Me'
                }]
            };
        }
        case UPDATE_TEXT_MESSAGE:{
            return {
                ...state,
                NewMessageText:action.messageText
            };
        }
        default:
            return state;
    }
}

export const AddMessageActionCreator=(message)=> ({
    type: ADD_MESSAGE,
    message
})


export default messagesReducer;