// noinspection JSUnresolvedVariable

import styles from './users.module.css'
import React from "react";
import userPhoto from './/images/anonimousAvatar.png'
import {NavLink} from "react-router-dom";
import Paginator from "./paginator";


let Users = (props) => {
    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            {props.users.map(user => <div key={user.id}>
            <span>
                <div className={styles.usersPhoto}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=''/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={props.followingProgressStatus.some(id => id === user.id)}
                                      onClick={() => {
                                          props.unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingProgressStatus.some(id => id === user.id)}
                                      onClick={() => {
                                          props.follow(user.id)
                                      }}>Follow</button>
                    }
                </div>
            </span>
                    <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
                </div>
            )}
        </div>
    )
}


export default Users