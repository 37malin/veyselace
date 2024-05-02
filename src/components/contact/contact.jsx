import React from 'react'
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name="contact">
    <div className="custom-form">
        <div className="background-image">
            <h2>Contact Me</h2>
            <a href="mailto:lesson37malin@gmail.com" className='send_email'>メールはこちらへ</a>
        </div>
    </div>
    </Element>
  )
}

export default Contact