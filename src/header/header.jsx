import React from 'react';
import logo from '../logo.svg';
import Search from '../search/search';


const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />     
        <Search></Search>
        </header>
    );
}

export default Header;