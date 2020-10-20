import React from 'react';

type PropsType = {
    status: string
}


class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    editModeOn = () => {
        this.setState({
            editMode : true
        })
        // this.state.editMode = true
    }

    editModeOff = () => {
        this.setState({
            editMode : false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={() => this.editModeOn()}>{this.props.status}</span>
                    </div> :
                    <div>
                        <input onBlur={() => this.editModeOff()} autoFocus={true}  value={this.props.status} type="text"/>
                    </div>}

            </div>
        );
    }
}

export default ProfileStatus;