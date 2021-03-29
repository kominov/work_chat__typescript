import React from 'react';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { Context } from '../..';
import { FludRoute, WorkChatRoute } from '../../constans/const';
import s from './Navbar.module.css';


export const Navbar: React.FC = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth);
    return (<>
        {user ? (<div className="col s2">
            <div className={s.nav}>
                <ul className={s.nav__list}>
                    <li><NavLink to={WorkChatRoute} activeClassName={s.active}>Рабочий чат</NavLink></li>
                    <li><NavLink to={FludRoute} activeClassName={s.active}>Messages</NavLink></li>
                </ul>
            </div>
        </div>) : ''}
    </>)
}

