import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatusWithHooks = (props: PropsType) => {

    const [state, setState] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const editModeOn = () => {
        setState(true)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const editModeOff = () => {
        setState(false)
        props.updateStatus(status)
    }


    return (
        <div>
            {!state ?
                <div>
                    <span onDoubleClick={editModeOn}>{props.status || 'Not Status'}</span>
                </div> :
                <div>
                    <input onChange={onStatusChange} onBlur={editModeOff}
                           autoFocus={true} value={status} type="text"/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;