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
import {ActionTypes, StoreType} from './redux/store';

type PropsType = {
    store: StoreType
    // addPost: (postMessageData: string) => void
    // updateNewPostText: (newText: string) => void
    // addMessage: (messageData: string) => void
    // updateNewMessageText: (newMessage: string) => void
    dispatch: (action: ActionTypes ) => void

}

const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar friends={state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() =>
                               <Dialogs dialogPage={state.dialogPage}
                                        dispatch={props.dispatch}
                                        // updateNewMessageText={props.updateNewMessageText}
                                        newMessageText={state.dialogPage.newMessageText}
                               />}/>
                    <Route path={'/profile'} render={() =>
                        <Profile profilePage={state.profilePage}
                                 dispatch={props.dispatch}
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

