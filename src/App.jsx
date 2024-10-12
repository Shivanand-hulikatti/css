import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full text-white min-h-screen bg-zinc-900 scrollbar-hide'>
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  )
}

export default App