import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="logo">
                TradingPlatform
		    </div>
            <div className="user-panel">
                <a href="">Ваш баланс: $398.43</a>
                <a href=""><i className="fas fa-user-tie"></i></a>
                <a href=""><i className="fas fa-sign-out-alt"></i></a>
            </div>
        </header>
    )
}

export default Header;