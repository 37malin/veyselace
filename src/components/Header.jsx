import React from 'react';
import logo from "../images/logo.png";
import { Link } from 'react-scroll';

const Header = () => {
   
  return (
    <header>
        <div className='original__header'>
            <div className="page-width">
                <div className="header__menulists">
                    <div className="__logo">
                        <h1>
                            <img src={ logo } alt="Veysel's Private Lesson" />
                        </h1>
                    </div>
                    <nav className="__menu">
                        <ul className="menulist-wrap">
                            <li><Link to="private" smooth={true} duration={200}>Whay Private?</Link></li>
                            <li><Link to="program" smooth={true} duration={200}>PROGRAM</Link></li>
                            <li><Link to="coach" smooth={true} duration={200}>COUCH</Link></li>
                        </ul>
                    </nav>
                    <Link to="contact" className='__cta' smooth={true} duration={200}>CONTACT</Link>
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header