import React from 'react';
//import './App.css';
import Navbar from './Componants/Navbar';
import Home from './Componants/Home';
import Experience from './Componants/Experience';
import Skills from './Componants/Skills';
import Projects from './Componants/Projects';
import Contact from './Componants/Contacts';
const App = () =>
{
  return(
    <>
    <Navbar/>

    <div className="container">
        <Home />
        <Experience />
         <Skills />
         <Projects />
         <Contact/>
      </div>
    </>
  )
}

export default App