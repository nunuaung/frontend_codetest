import React, { useEffect } from 'react'
import './about.css'
import Title from "../../components/Title"
import Button from "../../components/Button"
import { images } from '../../constants'

const About = () => {
  return (
    <div className='about sec-mb' data-aos='slide-up'>
      <div className='inner'>
        <div className='flex about-flex'>
            <div className='about-content about-col'>
                <Title title='About Trippro'/>
                <p className='about-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                     At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                <Button text='Tour To Website' />
            </div>
            <div className='about-image about-col flex'>
                <div className='border-bgOne'></div>
                <div className='border-bgTwo'></div>
                <div className='border-bgThree'></div>
                <img src={images.tablet} alt="tablet" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
