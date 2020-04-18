import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink to="/index"><div className="logo">
                TradingPlatform
		    </div>
            </NavLink>
            <div className="user-panel">
                <NavLink to="">Ваш баланс: $398.43</NavLink>
                <NavLink to="/register"><i className="fas fa-user-tie"></i></NavLink>
                <NavLink to="/logout"><i className="fas fa-sign-out-alt"></i></NavLink>
            </div>
        </header>
    )
}

export default Header;