import React from 'react'
import Navbar from './components/Navbar'
import Hero from '../app/Hero/page'
import Education from '../app/Education/page'
import Projects from '../app/Projects/page'

import Footer from '../app/Footer/page'
import Skills from '../app/Skills/page'
import Contact from '../app/Contact/page'
const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero />
    <Education />
    <Skills />
    <Projects />
    <Contact/>
   
  </div>
  )
}

export default page