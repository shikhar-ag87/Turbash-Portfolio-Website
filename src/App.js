import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  return (
    <div
      id="home"
      className="App font-sans bg-bg dark:bg-bg-dark text-fg dark:text-fg-dark min-h-screen transition-colors duration-500 ease-in-out relative overflow-x-hidden"
    >
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
