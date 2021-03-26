import React from 'react';
import { NavLink } from 'react-router-dom';
import { FludRoute, WorkChatRoute } from '../../const';

import s from './Navbar.module.css';

export const Navbar: React.FC = () => {
    return (

        <div className="col s2">
            <div className={s.nav}>
                <ul className={s.nav__list}>
                    <li><NavLink to={WorkChatRoute} activeClassName={s.active}>Рабочий чат</NavLink></li>
                    <li><NavLink to={FludRoute} activeClassName={s.active}>Messages</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

