import React, { useState, useEffect } from 'react'
import Logo from '../assets/ccLogo.png'

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`w-full px-20 py-6 flex justify-between items-center fixed z-[999] transition-all duration-300 ${
      isScrolled ? 'bg-white/30 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className='logo'>
        <img src={Logo} alt="" className='h-[60px] w-fit'/>
      </div>
      <div className="links flex gap-10 font-['Neue_Montreal']">
        {["QOTD","About Us","Our Team","Insights","Join Us"].map((item,index)=>{
          return <a key={index} className={`text-md capitalize font-light cursor-pointer hover:text-sky-400 ${index===4 && "ml-32"}`}>{item}</a>
        })}
      </div>
    </div>
  )
}

export default NavBar