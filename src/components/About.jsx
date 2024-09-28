import { HERO_TITLE } from "../constants";

import Profilepic from  "../assets/about.jpg";
import { motion } from "framer-motion"
import React from 'react'
const container = (delay) => ({
    hidden:{x:-100,opaciry:0},
    visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5,delay:delay},
    }
  })
const About=()=>{
    return(
        
        <div className="border-b  pb-4 border-neutral-900  lg:mb-35  ">
    <div className=" flex flex-wrap  p-9">

{/* // right-side */}
<div className="w-full lg:w-1/2 lg:p-3">
<motion.h1 variants={container(0.5)}
            initial="hidden"
            animate="visible"
             className='pb-14 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl hover:underline decoration-violet-500 transition duration-700 ease-in-out'>
             About Me.
            </motion.h1>
<div className="flex justify-center lg:justify-end">
<motion.img
 initial={{x:100,opacity:0}}
 animate={{x:0,opacity:1}} 
 transition={{duration:1,delay:1.2}}
src={Profilepic} alt="Profile pic"  className="max-w-xs w-100 lg:max-w-md h-auto cursor-pointer rounded-2xl hover:scale-110"/>

</div>
</div>
    {/* // left-side */}

<div className=" w-full lg:w-1/2 " >
<div className="flex flex-col items-center lg:pl-16">

            {/* <motion.span variants={container(1)}
            initial="hidden"
            animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
              Software Developer
            </motion.span> */}
            <motion.p
              variants={container(1.5)}
            initial="hidden"
            animate="visible"
             className='my-2 max-w-xl  font-normal text-justify tracking-tighter'>
              {HERO_TITLE}
            </motion.p>
            {/* <div className='px-2'> 
            <a href='https://drive.google.com/file/d/1TKLLRQs0gfiCRngDRHas6luPEci7Do6y/view' target='_blank'> 
            <motion.button variants={container(1.5)}
            initial="hidden"
            animate="visible" className='rounded-md border my-2 px-4 py-4 border-blue-900  bg-gradient-to-r from-cyan-900 to-blue-800 hover:from-purple-900 hover:to-pink-800'>Download CV</motion.button>
            </a>
            </div> */}
</div>
</div>

    </div>

</div>
    )
}
export default About;