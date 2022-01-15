// noinspection JSUnresolvedVariable

import React from "react";
import Paginator from "../paginator/paginator";
import User from "./user";


let Users = (props) => {
    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            {props.users.map(user => <User user={user}
                                           followingProgressStatus={props.followingProgressStatus}
                                           key={user.id}
                                           unfollow={props.unfollow}
                                           follow={props.follow}
                />
            )}
        </div>
    )
}


export default Users