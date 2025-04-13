import React from 'react'
import Navbar from './components\'/Navbar'
import Home from './components\'/Home'
import About from './components\'/About'
import { Portfolio } from './components\'/Portfolio'
import { Experiance } from './components\'/Experiance'
import Footer from './components\'/Footer'
import { Contact } from './components\'/Contact'
import { Toaster } from 'react-hot-toast'
import Project from './components\'/Project'

const App = () => {
  return (
   <>
   <div className="bg-black"> 
    <Navbar /><Home />
    <About/>
    <Portfolio/>
    <Project/>
    <Experiance/>
    <Contact/>
    <Footer/></div>
    <Toaster/>

    </>
  )
}

export default App