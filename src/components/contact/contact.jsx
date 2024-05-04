import React from 'react'
import { Element } from 'react-scroll';
import './contact.css';
import { FaWhatsappSquare } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const email = process.env.REACT_APP_EMAIL;
  const whatsapp = process.env.REACT_APP_WHATSAPP;
  return (
    <Element name="contact">
      <div className='background-image'>
          <div className='contact_contents'>
            <h2>Contact Me</h2>
            <div class="btnfeild">
              <div class="btn-wrap">
                <a href={`mailto:${email}`} className='send_email svg-wrap'><div class="btn_inner"><SiMinutemailer /><span>{email}</span></div></a>
              </div>
              <div class="btn-wrap">
                <a href={whatsapp} className='send_whatsapp svg-wrap'><div class="btn_inner"><FaWhatsappSquare /><span>WhatsAPP</span></div></a>
              </div>
            </div>
            <p>Please feel free ask me. I will return you the message as soon as possible.</p>
          </div>     
      </div>
    </Element>
  )
}

export default Contact