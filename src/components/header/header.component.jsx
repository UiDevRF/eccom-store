import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
        <img className='logo' alt="not available" src='https://www.logodesign.net/logo/penguin-wearing-detective-hat-5325ld.png?size=2&industry=apparel-fashion'></img>  
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            { currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;
