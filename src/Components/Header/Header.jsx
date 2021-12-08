import React from 'react';
import './Header.scss';
import NavbarItem from '../Navbar/Navbar';
import Main from '../Main/Main';

export default function Header() {
    return (
        <div className='header__container'>
            <NavbarItem />
            <Main />
        </div>
    )
}
