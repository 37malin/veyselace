import React from 'react'
import MainVisual from './mv/MainVisual';
import Body01 from './body01/body01';
import CtaBtn from './cta/cta';
import Body02 from './body02/body02';
import About from './about/about';
import Body05 from './body05/body05';
import Location from './location/location';
import Steps from './steps/steps';
import Gallery from './gallery/gallery';
import Footer from './footer/Footer';
import Body03 from './body03/Body03';
import Contact from './contact/contact';

const HomePage = () => {
    return (
        <div className="Top">
          <MainVisual />
          <Body01 />
          <CtaBtn />
          <Body02/>
          <Body03/>
          <CtaBtn text="Ask Price?"/>
          <About />
          <CtaBtn text="Ask Schedule?"/>
          <Location/>
          <CtaBtn text="Ask Location?"/>
          <Body05/>
          <CtaBtn text="Ask Plan?"/>
          <Steps/>
          <Contact/>
          <Gallery/>
          <Footer/>
        </div>
    );
}

export default HomePage