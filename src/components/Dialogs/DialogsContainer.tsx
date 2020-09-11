import {ActionTypes} from '../../redux/store';
import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/DialogPage-Reducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

// type DialogsType = {
//     state: AppStateType
//     dispatch: (action: ActionTypes) => void
// }


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText:(newMessage: string) => {

                dispatch(onMessageChangeActionCreator(newMessage))

        }
    }
}


const  DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;