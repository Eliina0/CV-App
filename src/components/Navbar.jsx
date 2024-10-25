import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/curriculum.png'

const Navbar = () => {
    const location = useLocation();
    
    return (
        <nav className='nav_container'>
            <div className='nav_logo'>
              <img src={logo} alt=""/>
              <h1 className='logo'>CV App</h1>
            </div>
            <ul className='nav_links'>
                <li>
                    <Link to='/' className={`nav_link ${location.pathname === '/' ? 'active' : ''}`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/cv-list' className={`nav_link ${location.pathname === '/cv-list' ? 'active' : ''}`}>
                        CV List
                    </Link>
                </li>
                <li>
                    <Link to='/create-cv' className={`nav_link ${location.pathname === '/create-cv' ? 'active' : ''}`}>
                        Create New CV
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
