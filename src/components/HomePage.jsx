import React from 'react'
import MainVisual from './mv/MainVisual';
import Body01 from './body01/body01';
import CtaBtn from './cta/cta';
import Body02 from './body02/body02';
import CtaBtn2 from './cta/cta2';
import About from './about/about';
import Body05 from './body05/body05';
import CtaBtn3 from './cta/cta3';
import Location from './location/location';
import Steps from './steps/steps';
import Gallery from './gallery/gallery';
import Footer from './footer/Footer';
import Body03 from './body03/Body03';

const HomePage = () => {
    return (
        <div className="Top">
          <MainVisual />
          <Body01 />
          <CtaBtn />
          <Body02/>
          <Body03/>
          <CtaBtn2/>
          <About />
          <Body05/>
          <CtaBtn3/>
          <Location/>
          <Steps/>
          <Gallery/>
          <Footer/>
        </div>
    );
}

export default HomePage