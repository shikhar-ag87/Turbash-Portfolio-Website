import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

export default function App(){
  return (
    <div className='App bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-300 ease-in-out'>
      <Navbar/>
      <Hero/>
      <About/>  
      App
      </div>
  )
}
