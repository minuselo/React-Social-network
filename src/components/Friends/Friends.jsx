import React from 'react';
import s from "./Friends.module.css";
import Preloader from "../common/preloader/Preloader";
import Pagination from "../common/Pagination/Pagination";
import Friend from "./Friend";


let Friends = (props) => {


    return (

        <div className={s.Friends}>
            {props.isLoading ? <Preloader/> : null}
            {props.Friends.map(el => {
                    return <Friend el={el} followIsFetching={props.followIsFetching}
                                   followDeleteFriend={props.followDeleteFriend}/>
                    /*<div className={s.Friend}>
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
                    </div>*/
                }
            )}

            <Pagination count={props.count} pageSize={props.pageSize} setNewPageNumber={props.setNewPageNumber} pageNumber={props.pageNumber}/>
        </div>
    );
}

export default Friends;