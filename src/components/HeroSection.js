import React from 'react'
import './HeroSection.css';
import '../App.css';
import {Button} from '../components/Button';



function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='https://www.youtube.com/watch?v=dg_VsotY0MU' autoPlay loop muted />
            <h1>ADVENTURE AMAITS</h1>
            <p>what are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >GET STARTED</Button>
                 <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >WATCH TRAILER <i className='far fa-play-circle'>  </i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
