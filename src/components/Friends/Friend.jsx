import React from 'react';
import s from "./Friends.module.css";
import user from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";


let Friend = (props) => {
    return ( <div className={s.Friend}>
                        <NavLink className={s.FriendLink} to={`/profile/${props.el.id}`}>
                            <img src={props.el.imageUrl != null ? props.el.imageUrl : user} alt=""/>
                            <div>
                                <h4>{props.el.name}</h4>
                            </div>
                        </NavLink>

                        {props.el.followed ? <button disabled={props.followIsFetching.some(id => id == props.el.id)} onClick={() => {
                                props.followDeleteFriend(props.el.id);
                            }
                            }>Удалить из друзей</button> :
                            <button disabled={props.followIsFetching.some(id => id == props.el.id)} onClick={() => {
                                props.followPostFriend(props.el.id);
                            }}>Добавить в друзья</button>}
                    </div>

            )

}

export default Friend;