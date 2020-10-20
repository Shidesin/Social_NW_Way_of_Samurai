import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}


class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    };

    editModeOn = () => {
        this.setState({
            editMode : true
        })
    };

    editModeOff = () => {
        this.setState({
            editMode : false
        })
        this.props.updateStatus(this.state.status);
    };
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        this.setState({status: e.currentTarget.value})
    };

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.editModeOn}>{ this.props.status || 'Not Status'}</span>
                    </div> :
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.editModeOff} autoFocus={true}  value={this.state.status} type="text"/>
                    </div>
                }

            </div>
        );
    }
}

export default ProfileStatus;