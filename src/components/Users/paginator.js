// noinspection JSUnresolvedVariable

import styles from './users.module.css'
import React from "react";


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = Math.max(props.currentPage - 5, 1); i <= Math.max(1, Math.min(props.currentPage + 5, pagesCount)); i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pageSelector}>
            {pages.map(page => {
                return <span
                    key={page}
                    className={props.currentPage === page ? styles.selectedPage : undefined}
                    onClick={(e) => {
                        props.onPageChanged(page)
                    }}>{page}
                        </span>
            })}
        </div>
    )}


export default Paginator