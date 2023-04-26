import React from 'react'
import Experience from '../ExperienceBox/Experience'
import { Element } from 'react-scroll'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <div>
      <Element className='experienceContainer' id='experience'>
        <h2>Experience</h2>
        <div className='experienceContainer_info'>
          <Experience
          title={"Transcentra FTS"}
          description={"Worked for NYSDTF in C#.Net and MSSQL for 3+yrs"}
          />
          <Experience
          title={"Exela Technologies"}
          description={"Worked for NYSDTF in C#.Net and MSSQL for 2+yrs"}
          />
          <Experience
          title={"Ascendion Technologies"}
          description={"Working for CVS Health in C#.Net, MVC and MSSQL for 1.5yrs"}
          />
            {/* <Experience 
            title={"NYSDTF"}
            description={"NewYork State Department of Taxation and Finance Annual maintenance changes."}
            technologies= {"Technologies : C#.Net, MSSQL"}
            Products= {"Products : TMS, eFlow"}
            />
            <Experience 
            title={"CVS Health"}
            description={"CVS Health - Website for Health solutions and plans. Worked in T-65 profile page and aquiring Manual Plan page."}
            technologies= {"Technologies : C#.Net, MVC, MSSQL"}
            products ={""}
            /> */}
        </div>
      </Element>
    </div>
  )
}

export default ExperienceContainer
