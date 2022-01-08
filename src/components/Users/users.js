// noinspection JSUnresolvedVariable

import styles from './users.module.css'
import React from "react";
import userPhoto from './/images/anonimousAvatar.png'
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = Math.max(props.currentPage - 5, 1); i <= Math.max(1, Math.min(props.currentPage + 5, pagesCount)); i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pageSelector}>
            {pages.map(page => {
                return <span className={props.currentPage === page ? styles.selectedPage : undefined}
                             onClick={(e) => {
                                 props.onPageChanged(page)
                             }}>{page}
                    </span>
            })}
        </div>

        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div className={styles.usersPhoto}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=''/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
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
            </div>)
        }
    </div>
}


export default Users