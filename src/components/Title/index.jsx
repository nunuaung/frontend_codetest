import React from 'react'
import './title.css'

function Title({title}) {
    const titleTexts = title.split(" ");
    const textOne = titleTexts[0];
    const textTwo = titleTexts[1];

  return (
    <h2 className='section-title'>
        <span className='title-highlight'>{textOne}
            <span className='title-borderline'></span>
        </span>
        {` ${textTwo}`}
    </h2>
  )
}

export default Title
