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
import {connect} from 'react-redux';
import {initialaizeApp} from './redux/appReducer';
import {AppStateType} from './redux/redux-store';
import {Preloader} from './components/Preloader/Preloader';

type MapDispatchPropsType = {
    initialaizeApp: (initialaized: boolean) => void
}

type mapStateToPropsType = {
    initialaized: boolean
}


class App extends React.Component<mapStateToPropsType & MapDispatchPropsType> {

    componentDidMount() {
        this.props.initialaizeApp(true)
    }

    render() {
        if (!this.props.initialaized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className={'app-wrapper-content'}>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
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
}

const mapStateToProps = (state: AppStateType) => {
    return {initialaized: state.app.initialaized}
}

export default connect(mapStateToProps, {initialaizeApp})(App);

