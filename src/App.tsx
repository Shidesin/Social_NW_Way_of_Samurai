import React from 'react';
import './App.css'
import {Header} from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import {Profile} from './components/Profile/Profile';
import Users from './components/Users/Users';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavbarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile/> }/>
                    <Route path={'/users'} render={() => <Users />}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

