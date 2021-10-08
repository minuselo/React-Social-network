import React from 'react';
import s from "./Friends.module.css";
import user from "../../assets/img/user.png";
import Preloader from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {Api} from "../../API/api";


let Friends = (props) => {
    let pagesCount = Math.ceil(props.count / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (

        <div className={s.Friends}>
            {props.isLoading ? <Preloader/> : null}
            {props.Friends.map(el => {
                    return <div className={s.Friend}>
                        <NavLink className={s.FriendLink} to={`/profile/${el.id}`}>
                            <img src={el.imageUrl != null ? el.imageUrl : user} alt=""/>
                            <div>
                                <h4>{el.name}</h4>
                            </div>
                        </NavLink>

                        {el.followed ? <button disabled={props.followIsFetching.some(id => id == el.id)} onClick={() => {
                                props.followDeleteFriend(el.id);
                            }
                            }>Удалить из друзей</button> :
                            <button disabled={props.followIsFetching.some(id => id == el.id)} onClick={() => {
                                props.followPostFriend(el.id);
                            }}>Добавить в друзья</button>}
                    </div>
                }
            )}

            <ul>
                {pages.map(el => {
                    return <li onClick={() => {
                        props.setNewPageNumber(el)
                    }} className={el === props.pageNumber && s.activePage}>{el}</li>
                })}
            </ul>
        </div>
    );
}

export default Friends;