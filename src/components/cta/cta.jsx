import React from 'react'
import './cta.css'
import { Link } from 'react-scroll';

const CtaBtn = ({ text = 'Want to See Me?' }) => {
  return (
    <div className="cta-contents">
        <div className="cta_wrap">
        <Link to="contact" className='__cta poyoyon' smooth={true} duration={200}>{text}</Link>
            
        </div>
    </div>
  )
}

export default CtaBtn