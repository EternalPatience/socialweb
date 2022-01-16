// noinspection JSUnresolvedVariable

import React from "react";
import Paginator from "../paginator/paginator";
import User from "./user";
import classes from './users.module.css'

let Users = (props) => {
    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalItemsCount}
                       pageSize={props.pageSize}
                       partitionSize={props.partitionSize}

            />
            <div className={classes.userBlock}>
            {props.users.map(user => <User user={user}
                                           followingProgressStatus={props.followingProgressStatus}
                                           key={user.id}
                                           unfollow={props.unfollow}
                                           follow={props.follow}
                />
            )}
            </div>
        </div>
    )
}


export default Users