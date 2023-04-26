import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div children="topContent">
      <div className='topContent_container'>
        <h1>Rajalakshmi Duraivelan</h1>
        <p>Full Stack Developer</p>
        <a href='www.google.com'>
          <button className='topContent_downloadBtn'>Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className='topContent_workBtn'>My Work</button>
        </Link>
      </div>
    </div>
  )
}

export default TopContent
