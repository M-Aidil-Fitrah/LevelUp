import React, { useState } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyLevelUp from './components/WhyLevelUp'
import UmkmEconomy from './components/UmkmEconomy'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [navbarTransform, setNavbarTransform] = useState<number | undefined>(undefined);
  const [isHeroActive, setIsHeroActive] = useState(true);

  return (
    <div className="app">
      <ScrollProgress />
      <Navbar controlledTransform={isHeroActive ? navbarTransform : undefined} />
      <Hero 
        onNavbarTransformChange={setNavbarTransform} 
        onHeroActiveChange={setIsHeroActive}
      />
      <About />
      <WhyLevelUp />
      <UmkmEconomy />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
