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

export const withAuthRedirectComponent = <ComponentStateProps extends {}> (Component:React.ComponentType<ComponentStateProps>) =>  {

    const RedirectComponent: React.FC<mapStateToPropsForRedirectType> = (props) =>  {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>;
        return < Component {...restProps as ComponentStateProps} />;
    }

    return connect<mapStateToPropsForRedirectType, {}, ComponentStateProps, AppStateType>(mapStateToPropsForRedirect)( RedirectComponent)
}

// export function withAuthRedirectComponent<WCP> (WrapedComponent:React.ComponentType<WCP>)  {
//
//     const RedirectComponent: React.FC<{}  & mapStateToPropsForRedirectType> = (props) =>  {
//
//         let {isAuth, ...restProps} = props
//
//         if (!isAuth) return <Redirect to={'/login'}/>;
//         return < WrapedComponent {...restProps as WCP} />;
//     }
//
//     return connect<mapStateToPropsForRedirectType, {}, WCP, AppStateType>(mapStateToPropsForRedirect, {})( RedirectComponent)
// }
