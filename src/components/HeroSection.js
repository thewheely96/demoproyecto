import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>Healthy Skin, Happy Life</h1>
        <p>Taking Care of you!</p>
        <div className='hero-btns'>
            <Button className = 'btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>Embrace Me</Button>
            <Button className = 'btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>Take a look<FontAwesomeIcon icon={faCirclePlay} className='play-circle'/></Button>
        </div>
    </div>
  )
}

export default HeroSection