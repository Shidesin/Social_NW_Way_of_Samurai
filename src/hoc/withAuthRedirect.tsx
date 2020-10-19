import {Redirect} from 'react-router-dom';
import React from 'react';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

export type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirectComponent = (Component: any) => {

    class RedirectComponent extends React.Component<any, any>{
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'} />;
            return < Component {...this.props} />;
        }
    }
    return connect(mapStateToPropsForRedirect, {})( RedirectComponent)
}