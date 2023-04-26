import React from 'react'
import './Experience.css'

const Experience = ({title,description,technologies,products,style}) => {
  return (
    <div style={{ ...style }} className='experience'>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{technologies}</p>
        <p>{products}</p>
    </div>
  )
}

export default Experience
