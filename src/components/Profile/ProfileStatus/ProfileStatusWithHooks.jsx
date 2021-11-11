import * as React from "react";
import s from './ProfileStatus.module.css';
import {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status,setStatus]=useState(props.status)


    let editStatus = () => {
        setEditMode(true);
    }

    let confirmStatus=()=>{
        setEditMode(false);
        props.updateStatus(status);
    }

    let statusChange=(e)=>{
        setStatus(e.target.value);
    }

    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);


    return (
        <div className={s.Status}>
            {!editMode ?
                <p onDoubleClick={editStatus}>{!status ? 'Расскажите о себе' : status}</p> :
                <input autoFocus={true} onBlur={confirmStatus} value={status}
                       onChange={statusChange} type="text"/>
            }
        </div>
    );

}


export default ProfileStatusWithHooks;