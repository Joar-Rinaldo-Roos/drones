import React, { useState } from 'react'
import Video from '../../video/VideoB.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroH1, HeroContent, HeroP } from './HeroElements'
import { ArrowForward } from './HeroElements'
import { ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement.js'
import { Link } from "react-router-dom"

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Drone delivery</HeroH1>
        <HeroP>
          Get your groceries delivered to your door!
        </HeroP>
        <HeroBtnWrapper>
          <Button to="/shopping" onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'>Get Farted {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <div className="w-100 text-center mt-3">
            <Link to="/shopping" color="black">Forgot Password?</Link>
          </div>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection