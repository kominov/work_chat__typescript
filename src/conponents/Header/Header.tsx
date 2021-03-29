import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import { Context } from '../..'
import { LoginRoute, WorkChatRoute } from '../../constans/const'

export const Header: React.FC = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (<>
        <nav>
            <div className="nav-wrapper grey darken-1 pd__1">
                <NavLink to={WorkChatRoute} className="brand-logo">Planktonics</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {user ? (
                        <li><button onClick={() => auth.signOut()} className="grey lighten-1 btn-small">Выйти</button></li>
                    ) : (
                        <NavLink to={LoginRoute}>
                            <li><button style={{ marginRight: '5px' }} className="grey lighten-1 btn-small">Логин</button></li>
                        </NavLink>

                    )}
                </ul>
            </div>
        </nav>
    </>)
}