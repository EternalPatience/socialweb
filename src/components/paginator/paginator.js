// noinspection JSUnresolvedVariable

import classes from './paginator.module.css'
import React, {useState} from "react";


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let partitionSize = 10
    let pages = []
    for (let i = 1;i <= pagesCount;i++) {
        pages.push(i);
    }

    let partitionCount = Math.ceil(pagesCount / partitionSize)
    let [partitionNumber, setPartitionNumber] = useState(1)
    let leftPartitionPageNumber = (partitionNumber - 1) * partitionSize + 1
    let rightPartitionPageNumber = partitionNumber * partitionSize

    return (
        <div className={classes.paginator}>
            {partitionNumber > 1 &&
            <button onClick={() => {setPartitionNumber(partitionNumber - 1)}}>
                prev
            </button>}
            {pages
                .filter(page => page >= leftPartitionPageNumber && page <= rightPartitionPageNumber)
                .map(page => {
                return <span
                    key={page}
                    className={props.currentPage === page ? classes.selectedPage : classes.pageNumber}
                    onClick={(e) => {
                        props.onPageChanged(page)
                    }}>{page}
                        </span>
            })}
            {partitionCount > partitionNumber &&
            <button onClick={() => (setPartitionNumber(partitionNumber + 1))}>
                next
            </button> }
        </div>
    )
}


export default Paginator