import React from 'react'
import './hero.css'
import { images } from '../../constants'

const Hero = () => {
  return (
    <div className='hero' style={{ backgroundImage: `url(${images.hero})` }} data-aos='slide-up'>
        <div className='inner'>
            <div className='hero-content flex'>
                <h1 className='hero-title'>TRIPPRO - AN ECOMMERCE SOLUTION</h1>
                <p className='hero-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                <div className='flex hero-items'>
                    <div className='hero-item flex'>
                        <p className='hero-itemtext'>Built for:</p>
                        <img src={images.resposiveicon} alt='responsive icon' />
                    </div>
                    <div className='item-border'></div>
                    <div className='hero-item flex'>
                        <p className='hero-itemtext'>Technologies:<span>Wordpress</span></p>
                        <img src={images.wordpressicon} alt='responsive icon' />
                    </div>
                    <div className='item-border'></div>
                    <div className='hero-item flex'>
                        <p className='hero-itemtext'>Industry:<span>Ecommerce</span></p>
                        <img src={images.carticon} alt='responsive icon' />
                    </div>
                </div>
                <div className='laptop'>
                    <div className='laptop-base'>
                        <img src={images.laptop} alt='laptop' />
                        <img src={images.herotrippro} alt='hero trippro' className='herotrippro' />
                    </div>
                </div>
            </div>
        </div>
      <div className='gradient'/>
    </div>
  )
}

export default Hero
