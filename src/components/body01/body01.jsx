import React from 'react'
import './body01.css'
import mainImage from '../../images/body01/body01.png'
import bgImage1 from '../../images/body01/body01-1.svg'
import bgImage2 from '../../images/body01/body01-2.svg'

const Body01 = () => {
  return (
    <div>
        <div className="body01">
            <div className="_contents">
                <div className="_txtfeild">
                    <h4><span className="highlight">Elevate Your Game</span></h4>
                    <h2><span className="highlight">L</span>ife Revamp</h2>
                    <h3>Boost your tennis, broaden your circle, and brighten your world.</h3>
                    <p>Why not add some colour to your life by improving your tennis skills through self-investment, and gaining new social opportunities along the way?</p>
                </div>
                <div className="_imagefeild">
                    <img src={ mainImage } alt="veysel private tennis lessons" />
                </div>
            </div>
    
            <div className="_bgimage1"><img src={bgImage1} alt="veysel private tennis lessons" /></div>
            <div className="_bgimage2"><img src={bgImage2} alt="veysel private tennis lessons" /></div>
        </div>
    </div>
  )
}

export default Body01