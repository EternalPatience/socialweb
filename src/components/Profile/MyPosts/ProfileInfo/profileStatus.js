import React, {useEffect, useState} from "react";


const ProfileStatus =(props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b>
                <span onDoubleClick={activateEditMode}>
                    {props.status || "Double click to add new post text"}
                </span>
            </div>}

            {editMode &&
                <div>
                    <input autoFocus={true}
                           onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           value={status}
                    />
                </div>
            }
        </div>
    )
}


export default ProfileStatus