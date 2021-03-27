import React from 'react'
import { NavLink } from 'react-router-dom'
import { WorkChatRoute } from '../../const'

export const Header: React.FC = () => {
    return (<>
        <nav>
            <div className="nav-wrapper grey darken-1 pd__1">
                <NavLink to={ WorkChatRoute } className="brand-logo">Planktonics</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                   
                </ul>
            </div>
        </nav>
    </>)
}