import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
        <img className='logo' alt="not available" src='https://www.logodesign.net/logo/penguin-wearing-detective-hat-5325ld.png?size=2&industry=apparel-fashion'></img>  
        </Link>

        <div className='options'>
            <Link className='option' to='/signin'>Sign In</Link>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            
        </div>
    </div>
)

export default Header;
