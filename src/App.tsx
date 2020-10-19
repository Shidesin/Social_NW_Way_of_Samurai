import React from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/> }/>
                    <Route path={'/users'} render={() => <UsersContainer />}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

