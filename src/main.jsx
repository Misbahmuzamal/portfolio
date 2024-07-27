import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LocalNavbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Project from './Components/Project.jsx'
import Contact from './Components/Contact.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalNavbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
  </React.StrictMode>,
)
