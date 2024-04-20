import React from 'react'
import mainImage from '../../images/body05/body05.jpg'
import './body05.css'

const Body05 = () => {
  return (
    <div className="body05">
        <div className="_contents">
            <h4><span className="highlight">Why am I chosen as your coach?</span></h4>
            <h2><span className="highlight">A</span> <span className="highlight">P</span>ersonal <span className="highlight">J</span>ourney to <span className="highlight">E</span>xcellence</h2>
            <div className="_flex">
                <p className="_description">It's because of my genuine dedication to each student's improvement and my focus on speeding up the learning process. Whenever a student executes a move, I'm there to pinpoint exactly what needs to be refined, offering tailored advice to guide them closer to their tennis aspirations with every session. My coaching is all about personalised strategies that unlock each student's full potential, ensuring their tennis skills flourish. So, for anyone eager to master tennis efficiently and swiftly, making me your coach is the perfect decision.</p>
                
                <div className="_image-wrap">
                    <img src={mainImage} alt="A Personal Journey to Excellence" />
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Body05