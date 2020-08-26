import React from 'react';
import './App.css'
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Profile} from './components/Profile/Profile';
import {RootStateType} from './redux/state';

type PropsType = {
    state: RootStateType
    addPost: (postMessageData: string) => void
    updateNewPostText: (newText: string) => void
    addMessage: (messageData: string) => void
    updateNewMessageText: (newMessage: string) => void
}

const App: React.FC<PropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar friends={props.state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() =>
                               <Dialogs dialogPage={props.state.dialogPage}
                                        addMessage={props.addMessage}
                                        updateNewMessageText={props.updateNewMessageText}
                                        newMessageText={props.state.dialogPage.newMessageText}
                               />}/>
                    <Route path={'/profile'} render={() =>
                        <Profile profilePage={props.state.profilePage}
                                 addPost={props.addPost}
                                 updateNewPostText={props.updateNewPostText}
                        />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;

