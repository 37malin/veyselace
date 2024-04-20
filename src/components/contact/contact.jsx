import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="custom-form">
        <div className="background-image">
            <h2>Contact Me</h2>
            <div id="message" className="success_message"></div>
            <form id="myForm" onsubmit="submitForm(); return false;">
            <div className="form_wrap">
                <div className="_inputfeild">
                <label for="firstname">First name <span>*</span></label>
                <input type="text" id="firstname" name="firstname" required="">
                </div>
                <div className="_inputfeild">
                <label for="lastname">Last name <span>*</span></label>
                <input type="text" id="lastname" name="lastname" required="">
                </div>
                <div className="_inputfeild">
                <label for="email">Email <span>*</span></label>
                <input type="email" id="email" name="email" required="">
                </div>
                <div className="_inputfeild">
                <label for="whatsapp">WhatsAPP (if you want to reply via WhatsApp)</label>
                <input type="tel" id="whatsapp" name="whatsapp">
                </div>
                <div className="_inputfeild">
                <label for="message">Message <span>*</span></label>
                <textarea id="message" name="message" rows="10" required=""></textarea>
                </div>
                
                <button id="submitButton" type="submit" style="background-color:#e9de1d;color:#0c3c4a;border-bottom: 5px solid #999f00;">Submit</button>
            </div>
            
            </form>
        </div>
    </div>
  )
}

export default Contact