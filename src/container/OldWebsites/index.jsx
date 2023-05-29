import React from 'react'
import './oldwebsites.css'
import { useState } from 'react';
import { tripproimages } from '../../constants';
import {FaAngleLeft, FaAngleRight, FaArrowRight} from "react-icons/fa";

const OldWebsites = () => {
    const [current, setCurrent] = useState(0);
    const [toggle, setToggle] = useState(false);
    const slides = toggle ? [tripproimages.tripprodesktop1,tripproimages.tripprodesktop2,tripproimages.tripprodesktop1,tripproimages.tripprodesktop2] : [tripproimages.trippromobile1,tripproimages.trippromobile2,tripproimages.trippromobile3,tripproimages.trippromobile4];
    
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    
  return (
    <div className='oldWebsites sec-mb' data-aos='slide-up'>
        <div className='slider-wrapper flex'>
            <div className='slider'>
                {slides?.map((slide, index) => {
                    return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <div className={`slider-image ${toggle ? 'desktop' : ''}`}>
                        <img src={slide} alt='slide' className='image' /></div>
                        )}
                    </div>
                    );
                })}
            </div>
            <div className='slider-content'>
                <h2 className='slider-title'>Their Old Website & Problems</h2>
                <p className='slider-info flex'>
                    <FaArrowRight className='arrow-right'/>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                </p>
                <p className='slider-info flex'>
                    <FaArrowRight className='arrow-right'/>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                </p>
                <p className='slider-info flex'>
                    <FaArrowRight className='arrow-right'/>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                </p>
                <div className='slider-arrow'>
                    <span className='left-arrow' onClick={prevSlide} ><FaAngleLeft/></span>
                    <span className='right-arrow' onClick={nextSlide} ><FaAngleRight/></span>
                </div>
                <div class="toggle-container">
                    <input type="checkbox" onClick={()=>setToggle(!toggle)}/>
                    <span class="button-slider round "></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OldWebsites
