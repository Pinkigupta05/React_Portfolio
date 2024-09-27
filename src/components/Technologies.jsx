import { RiReactjsLine } from "react-icons/ri";
import {RiTailwindCssFill} from "react-icons/ri"
import { motion } from "framer-motion";
import { RiFirebaseFill } from "react-icons/ri";
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import {BiLogoJavascript  } from "react-icons/bi";
import {BiLogoGithub} from "react-icons/bi";
import { BiLogoGit} from "react-icons/bi";
// import { FFramerMotion } from 'react-icons/F';
import { FaBootstrap } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
// Define variants outside the component for reusability and performance
const textVariant = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
};

const iconMove= (duration) => ({
    initial: {y:-10},
    animate : {
        y: [10,-10],
        transition : {
            duration: duration,
            ease: "linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView="animate"
        initial="initial"
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
        variants={textVariant}
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView="animate"
        initial="initial"
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconMove(2.5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-green-400 group-hover:opacity-50" />
        </motion.div>
        <motion.div
          variants={iconMove(2.5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-green-400 group-hover:opacity-50" />
        </motion.div>
        <motion.div
          variants={iconMove(2.5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiFirebaseFill className="text-7xl text-orange-600 group-hover:opacity-50" />

        </motion.div>
        <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <TbFileTypeSql className='text-7xl text-black-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 
                

                opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    SQL
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoCPlusPlus className='text-7xl text-blue-950 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    C++
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoJava className='text-7xl text-blue-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                   java
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoGit className='text-7xl text-orange-800 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                   java
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoGithub className='text-7xl text-black group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                   java
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoJavascript className='text-7xl text-yellow-500 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                   java
                </span>
                
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <FaBootstrap className='text-7xl text-violet-900 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                   java
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                < TbBrandFramerMotion className='text-7xl text-blue-800 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                   java
                </span>
            </motion.div>
           
      </motion.div>

    </div>
  );
}

export default Technologies;
