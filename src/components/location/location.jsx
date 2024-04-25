import React from 'react'
import './location.css'
import Image from '../../images/location/location.png';

const Location = () => {
  return (
    <div id="location" className="location">
        <div className="_contents">
            <div className="_txtfeild">
                <h4><span className="highlight">Location</span></h4>
                <h2><span className="highlight">S</span>ydney, NSW</h2>
                <p>
                <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1222_33860)">
                <path d="M11.5 5C11.5 8 7 11.5 7 11.5C7 11.5 2.5 8 2.5 5C2.5 2.549 4.549 0.5 7 0.5C9.451 0.5 11.5 2.549 11.5 5Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7 6.5C7.82843 6.5 8.5 5.82843 8.5 5C8.5 4.17157 7.82843 3.5 7 3.5C6.17157 3.5 5.5 4.17157 5.5 5C5.5 5.82843 6.17157 6.5 7 6.5Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M11.0773 10H12L13.5 13.5H0.5L2 10H2.9227" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                <clipPath id="clip0_1222_33860">
                <rect width="14" height="14" fill="white"></rect>
                </clipPath>
                </defs>
                </svg>
                </span>test</p>
            </div>
            <div className="_mapfeild">
            <div className="_imagefeild">
              <img src={ Image } alt="veysel private tennis lessons" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Location