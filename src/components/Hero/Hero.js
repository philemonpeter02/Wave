import React from 'react'
import Wave from '../WaveSection/Wave'
import './Hero.css'

const HeroSection = () => {
    return (
        <div className="Hero">
            <div className="HeroGroup">
            <h1>Designed And Developed By Philemon Peter</h1>
            <p>A website with cool wave animation</p>
            <button className="btn"><a target="_blank" href="https://github.com/philemonpeter02">Github</a></button>
            <div className="Logos">
               <img src={require('../../images/logo-sketch.png')} alt="sketch" width="50" />
               <img src={require('../../images/logo-figma.png')} alt="figma" width="50" />
               <img src={require('../../images/logo-studio.png')} alt="studio" width="50" />
               <img src={require('../../images/logo-framer.png')} alt="framer" width="50" />
               <img src={require('../../images/logo-react.png')} alt="react" width="50" />
               <img src={require('../../images/logo-swift.png')} alt="swift" width="50" />
            </div>
            <Wave />
            </div>
        </div>
    )
}

export default HeroSection
