import React from 'react';
import { useState, useEffect } from 'react';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },
        [props.status])

    let activeEditMode = () => {
        setEditMode(true);
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div>
        {!editMode &&
            <div>
                <span onDoubleClick={activeEditMode} >{props.status || "-------"}</span>
            </div>
        }
        {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            </div>
        }
    </div>

}
export default ProfileStatusWithHooks;