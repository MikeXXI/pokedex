import React from 'react';
import logo from '../logo.svg';
import Search from '../Header/Search';
import Pokédex from '../Content/List';
import ChangeLang from '../Header/ChangeLang';


export default function PagePrincipal(lang, setLang){
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />     
                <Search></Search>
                <ChangeLang lang={lang} setLang={setLang}></ChangeLang>
            </header>
            <Pokédex></Pokédex>
            
        </div>
        );
         
}
