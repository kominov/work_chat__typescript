import React from 'react'

export const Header: React.FC = () => {
    return (<>
        <nav>
            <div className="nav-wrapper grey darken-1 pd__1">
                <a href="/" className="brand-logo">Planktonics</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Sass</a></li>
                    <li><a href="/">Components</a></li>
                </ul>
            </div>
        </nav>
    </>)
}