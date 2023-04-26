import React from 'react';
import Header from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import SkillContainer from './Components/SkillContainer/SkillContainer';
import ProjectsContaner from './Components/ProjectsContainer/ProjectsContaner';
import './App.css'
import ExperienceContainer from './Components/ExperienceContainer/ExperienceContainer';
import ContactContainer from './Components/ContactContainer/ContactContainer';

const App = () =>{
 
    return (
      <div>
        <Header/>
        <TopContainer />
        <SkillContainer />
        <ProjectsContaner />
        <ExperienceContainer />
        <ContactContainer />
      </div>
    );
}

export default App;