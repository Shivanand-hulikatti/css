import React from 'react';
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className='data-scroll data-scroll-section data-scroll-speed="0.1" w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <div className='border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }} 
          className='text-[8vw] font-monsterrat font-bold leading-none pt-10 pr-10 mb-[3vw]'>
          WE ARE CODECLUB
        </motion.h1>
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }} 
          className='text-[8vw] font-monsterrat font-bold leading-none pt-10 pr-10 mb-[3vw]'>
          WE ARE CODECLUB
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
