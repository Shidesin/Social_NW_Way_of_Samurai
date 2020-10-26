import {ActionTypes} from '../../redux/store';
import {addMessageActionCreator} from '../../redux/DialogPage-Reducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirectComponent} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        addMessage: (message: string) => {dispatch(addMessageActionCreator(message))},
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs)