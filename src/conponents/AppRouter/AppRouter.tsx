import React from 'react';
import { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Context } from '../..';
import { LoginRoute, WorkChatRoute } from '../../constans/const';
import { privateRoutes, publicRoutes } from '../routes';
import {useAuthState} from 'react-firebase-hooks/auth'

export const AppRouter: React.FC = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);
    
    return (<>
        {user ?
        (
        <Switch>
            {privateRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to={WorkChatRoute}/>
        </Switch>
            ) :
            (
        <Switch>
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to={LoginRoute} />
        </Switch>
            )}
    </>);
};



