import React from 'react'
import { Element } from 'react-scroll'
import Projects from '../Projects/Projects'
import './ProjectsContaner.css'

const ProjectsContaner = () => {
    const projects = [{
        img: "/img/P1.png",
        title: "CRUD",
        description:"CRUD - Operations in React",
        link:"https://crud-operations-task.netlify.app/"
    },
    {
      img:"/img/P2.png",
      title: "TIC-TAC-TOE",
      description:"TIC-TAC-TOE Game",
      link:"https://games-tic-tac-toe-example.netlify.app/"
    }
  ]
  return (
    <Element className='projectsContainer' id='projects'>
      <h2>Projects</h2>
      <p>Here are some projects which I did for my learning</p>
      <div className='projectContainer_projects'>
        {
            projects.map((projects,index)=>{
                return(
                    <Projects 
                        key={index}
                        img={projects.img}
                        title={projects.title}
                        desc={projects.description}
                        link={projects.link}
                    />
                )
            })
        }
      </div>
    </Element>
  )
}

export default ProjectsContaner
