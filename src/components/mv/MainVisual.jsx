import React from 'react'
import './mainvisual.css';
import mainImg from "../../images/mv.jpg";

const MainVisual = () => {
  return (
    <div className="mainvisual">
       <div className="img-wrap">
         <img src={ mainImg } alt="Veysel's Private Lesson" />
       </div>
       <div className="_txtfeild">
            <h2>Elevate Your Tennis Skills with Personalised Coaching</h2>
            <p>Step onto the court with confidence and precision. Our personalized coaching methods are designed to fine-tune your technique, strategy, and mental game.</p>
            <div className="__cta"><a href="#location">NSW in Australia</a></div>
        </div>
    </div>
  )
}

export default MainVisual