import {reRender} from "../render";

let state={
   messagesPage:{
     Users:[{id:1,name:'Friend1'},
    {id:2,name:'Friend2'},
    {id:3,name:'Friend3'},
    {id:4,name:'Friend4'},
    {id:5,name:'Friend5'}],
    Messages:[
            {id:0,message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut dolor quidem sequi!' +
                    ' Aspernatur blanditiis dignissimos, dolore, eligendi esse excepturi exercitationem in magnammodi' +
                    ' necessitatibus nobis obcaecati perspiciatis provident.', author:'Friend4' },
            {id:1,message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit', author: 'Me'},
            {id:2,message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.t', author: 'Me'}]
},
    profilePage:{
        Posts:[
            {id:0,text:"Пост под номером один", likeCount:5},
            {id:1,text:"Пост про что-то там", likeCount:14},
            {id:2,text:"Пост про ыыыыы", likeCount:165}
        ]
    }
}

export let addPost=(messageText)=>{
    state.profilePage.Posts.push({
        id:5,
        text: messageText,
        likeCount: 0
    });
    reRender(state);
}

export default state;