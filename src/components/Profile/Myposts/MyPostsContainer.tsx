import {AddPostActionCreator} from '../../../redux/ProfilePage-Reducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/redux-store';
import {ActionTypes} from '../../../redux/store';
import {connect} from 'react-redux';


let mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps =  (dispatch: (action: ActionTypes) => void) => {
    return {
        addPost: (textMessage: string) => { dispatch(AddPostActionCreator(textMessage))},
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)



export default MyPostsContainer;
