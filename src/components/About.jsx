import React from 'react'
import Team from '../assets/ccTeam.jpg'

function About() {
  return (
    <div className='w-full bg-[#CDEA68] py-20 rounded-tr-3xl rounded-tl-3xl text-black'>
        <h1 className='text-[4vw] tracking-tight font-["Neue_Montreal"] px-20 leading-[4vw]'>
            Control the code, control the world <br />
            A Student body at <span className='font-semibold'>KLE Technological Uniniversity,</span> <br />
            Determined Team to Spread Coding Culture
        </h1>
        <div className='w-full mt-20 border-t-[2px] border-[#a1b562] flex'>
           <div className='px-20 w-1/2 pt-10'>
              <h1 className='text-6xl'>Our Team</h1>
              <button onClick={()=>{
                window.open('https://chat.whatsapp.com/HC2lidYu0J41pmqepGh45v?fbclid=PAZXh0bgNhZW0CMTEAAaaMFKS8xgCdJ2pmdODHybMukNRog3KH4zW7oL32KdJRlPBhn5BK90W2PGA_aem_ABqzSICn7PwsnLd3VwH_Lg')
              }} className='flex items-center gap-5 bg-zinc-900 text-white px-10 py-3 rounded-full mt-5'>
                JOIN US
                <div className='w-2 h-2 rounded-full bg-white items-center'>
                </div>
              </button>
           </div>
           <div className='w-1/2 h-[60vh] bg-gray-300 mt-10 mr-10 rounded-3xl'>
                <img className='w-full h-full object-cover rounded-3xl' src={Team} alt=""/>
           </div>
        </div>
    </div>
  )
}

export default About