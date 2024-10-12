import React from 'react'
import hero from '../assets/hero.svg'

function LandingPage() {
  return (
    <div className='data-scroll data-scroll-section data-scroll-speed="-0.3" w-full h-screen bg-zinc-900 pt-1'>
        <div className='flex'>
            <div className='heroText mt-40 px-20'>
                {["Code,","Compete,","Conquere."].map((item,index)=>{
                    return <>
                    <div className='mask'>
                        <h1
                        className='capitalize leading-[6.5vw] text-[7vw] font-monsterrat font-semibold'>
                            {item}
                        </h1>
                </div> </>
                })}
            </div>
            <div className='rounded-full bg-slate-500 mt-32 ml-10 w-[650px] h-auto'>
                <img src={hero} alt="" className='pt-2'/>
           </div>
        </div>
        <div className='border  border-t-[1px] border-zinc-800 mt-32'>
        </div>
    </div>
  )
}

export default LandingPage