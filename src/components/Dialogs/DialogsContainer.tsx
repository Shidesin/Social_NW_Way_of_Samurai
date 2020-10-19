import {ActionTypes} from '../../redux/store';
import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/DialogPage-Reducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirectComponent} from '../../hoc/withAuthRedirect';


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText,
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

// let AuthRedirectComponent = (Dialogs)

const  DialogsContainer = withAuthRedirectComponent(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer;