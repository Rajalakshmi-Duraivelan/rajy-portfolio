import { LinearProgress } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import './SkillContainer.css'

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className='skillContainer_image'>
        <img src={"/img/Skills.png"} alt="XYZ"/>
      </div>
      <div className='skillContainer_text'>
        <h2>SKILLSET</h2>
        <div className='skillContainer_skillSet'>
          <h5>React</h5>
          <div className='skillContainer_slider skillContainer_slider1'>
            <LinearProgress variant='determinate' value={70} />
          </div>
        </div>
        <div className='skillContainer_skillSet'>
          <h5>NodeJS</h5>
          <div className='skillContainer_slider skillContainer_slider2'>
            <LinearProgress variant='determinate' value={70} />
          </div>
        </div>
        <div className='skillContainer_skillSet'>
          <h5>C#</h5>
          <div className='skillContainer_slider skillContainer_slider3'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className='skillContainer_skillSet'>
          <h5>MSSQL</h5>
          <div className='skillContainer_slider skillContainer_slider4'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className='skillContainer_skillSet'>
          <h5>MySQL</h5>
          <div className='skillContainer_slider skillContainer_slider5'>
            <LinearProgress variant='determinate' value={70} />
          </div>
        </div>
        <div className='skillContainer_skillSet'>
          <h5>Mongo DB</h5>
          <div className='skillContainer_slider skillContainer_slider6'>
            <LinearProgress variant='determinate' value={60} />
          </div>
        </div>
        <div className='skillContainer_skillSet'>
          <h5>Express</h5>
          <div className='skillContainer_slider skillContainer_slider7'>
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default SkillContainer
