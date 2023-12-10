import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="" className="logo" />
            <div className="desktopMenu">
                <Link className='desktopMenuListItem' to="/">Home</Link>
                <Link className='desktopMenuListItem' to="/">About</Link>
                <Link className='desktopMenuListItem' to="/">Portfolio</Link>
                <Link className='desktopMenuListItem' to="/">Projects</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contactImg} alt="" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar;