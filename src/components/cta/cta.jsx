import React from 'react'
import './cta.css'

const CtaBtn = ({ text = 'Want to See Me?' }) => {
  return (
    <div className="cta-contents">
        <div className="cta_wrap">
            <div className="__cta">
                <a href="#contact" className="poyoyon">{text}</a>
            </div>
        </div>
    </div>
  )
}

export default CtaBtn