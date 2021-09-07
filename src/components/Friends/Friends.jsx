import React from 'react';
import s from './Friends.module.css';
import * as axios from "axios";
import user from '../../assets/img/user.png'

const Friends = (props) => {
    if (props.Friends.length===0){
       axios.get('https://social-network.samuraijs.com/api/1.0/users').
           then(response=>{
               debugger;
           props.AddFriends(response.data.items);
       });
    }
    return (
        <div className={s.Friends}>
            {props.Friends.map(el => {
                    return <div className={s.Friend}>
                        <img src={el.imageUrl!=null?el.imageUrl:user} alt=""/>
                        <div>
                            <h4>{el.name}</h4>
                            <p>{el.id}</p>
                        </div>
                        {el.friended ? <button onClick={() => {
                            props.ToggleFriend(el.id);
                        }
                        }>Удалить из друзей</button> : <button onClick={() => {
                            props.ToggleFriend(el.id);
                        }}>Добавить в друзья</button>}
                    </div>
                }
            )}
        </div>
    );

}

export default Friends;