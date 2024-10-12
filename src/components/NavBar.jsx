import React from 'react'
import Logo from '../assets/ccLogo.png'

function NavBar() {
  return (
    <div className="w-full px-20 py-6 flex justify-between items-center fixed z-[999]">
        <div className='logo'>
            <img src={Logo} alt="" className='h-[60px] w-fit'/>
        </div>
        <div className="links flex gap-10 font-['Neue_Montreal']">
            {["QOTD","About Us","Our Team","Insights","Join Us"].map((item,index)=>{
                return <a key={index} className={`text-md capitalize font-light ${index===4 && "ml-32"}`}>{item}</a>
            })}
        </div>
    </div>
  )
}

export default NavBar