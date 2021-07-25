import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContactItem from "./components/Dialogs/DialogItem/ContactItem";
import Message from "./components/Dialogs/Message/Message";
import Post from "./components/Profile/MyPosts/Post/Post";

let Users=[
    {id:1,name:'Friend1'},
    {id:2,name:'Friend2'},
    {id:3,name:'Friend3'},
    {id:4,name:'Friend4'},
    {id:5,name:'Friend5'}
]

let Messages=[
    {id:0,message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut dolor quidem sequi!' +
            ' Aspernatur blanditiis dignissimos, dolore, eligendi esse excepturi exercitationem in magnammodi' +
            ' necessitatibus nobis obcaecati perspiciatis provident.', author:'Friend4' },
    {id:1,message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit', author: 'Me'},
    {id:2,message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.t', author: 'Me'}
]
let UsersElements= Users.map(el => < ContactItem name={el.name} contactId={el.id}/>)
let MessagesElements=Messages.map(el => <Message messageText={el.message} messageAuthor={el.author}/> )

let Posts=[
    {id:0,text:"Пост под номером один", likeCount:5},
    {id:1,text:"Пост про что-то там", likeCount:14},
    {id:2,text:"Пост про ыыыыы", likeCount:165}
]
let PostsElements= Posts.map(el=>< Post postTxt={el.text} likeCount={el.likeCount} />)


ReactDOM.render(
  <React.StrictMode>
    <App UsersElements={UsersElements} MessagesElements={MessagesElements} PostsElements={PostsElements} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
