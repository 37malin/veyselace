import React from 'react'
import stepImage from '../../images/steps/steps.png'
import './steps.css'

const Steps = () => {
  return (
    <div className="steps">
        <h4><span className="highlight">Flow</span></h4>
        <h2><span className="highlight">H</span>ow can you take a lesson?</h2>
        <div>
           <img src={stepImage} alt="flow to take lessons" />    
        </div>
    </div>
  )
}

export default Steps