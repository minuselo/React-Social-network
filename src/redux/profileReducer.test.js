import profileReducer, {AddPostActionCreator, DeletePostActionCreator} from "./profileReducer";


let state = {
    Posts: [
        {id: 0, text: "Пост под номером один", likeCount: 5},
        {id: 1, text: "Пост про что-то там", likeCount: 14},
        {id: 2, text: "Пост про ыыыыы", likeCount: 165}
    ],
    Profile:null,
    status:''
}



it('should posts array increment', ()=> {
let action= AddPostActionCreator("fghfghfdgh");

let newState=profileReducer(state,action);

expect(newState.Posts.length).toBe(4);

});


it('should posts array decrement', ()=> {
    let action=DeletePostActionCreator('0');

    let newState=profileReducer(state,action);

    expect(newState.Posts.length).toBe(2);

});