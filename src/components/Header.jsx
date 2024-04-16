import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='original__header'>
            <div className="page-width">
                <div className="header__menulists">
                    <div className="__logo">
                        <h1>logo</h1>
                    </div>
                    <nav className="__menu">
                        <ul className="menulist-wrap">
                            <li>home</li>
                            <li>price</li>
                            <li>couch</li>
                            <li>program</li>
                        </ul>
                    </nav>
                    <div className="__cta">
                      <a href="#" >contact</a>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header