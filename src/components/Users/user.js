import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "./images/anonimousAvatar.png";
import React from "react";

const User = (props) => {
    return (
        <div key={props.user.id}>
            <span>
                <div className={styles.usersPhoto}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt=''/>
                    </NavLink>
                </div>
                <div>
                    {
                        props.user.followed
                            ? <button disabled={props.followingProgressStatus.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.unfollow(props.user.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingProgressStatus.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.follow(props.user.id)
                                      }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User