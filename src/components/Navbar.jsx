import React from 'react'
import '../index.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
// import { FaGithub } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa';
import { FaCat } from 'react-icons/fa';


const Navbar = () =>{
    return(
<>

      

  
   
<nav className=" mb-20 flex items-center justify-between py-6 px-1   "> 
    
    
    
    <div className="flex flex-shrink-0 items-center  ">


        <h2 className='text-white mx-1  text-2xl font-bold' >Pinki <img src="image." alt="" /> </h2>

    </div>

    <div className='m-8 flex items-center  justify-right gap-4 text-2xl '>
            <a href="https://www.linkedin.com/in/pinki-gupta-a2738a25a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-white transition ease-in-out delay-100 hover:-translate-y-1'></FaLinkedin>
            </a>
            <a href="" rel='noopener noreferrer' target='blank'>
            <FaHackerrank className='hover:-translate-y-2 transition ease-in-out delay-100'></FaHackerrank></a>
            <a href="https://x.com/Pinki_gupta0506" target='blank' rel='noopener noreferrer'>
            <BsTwitterX className='text-white hover:-translate-y-2 transition ease-in-out delay-100' ></BsTwitterX> 
            </a>
            <a href="https://github.com/Pinkigupta05" rel='noopener noreferrer' target='blank'><FaGithub className='hover:-translate-y-2 transition ease-in-out delay-100'></FaGithub></a>
            <a href="https://www.instagram.com/_pinkigupta_04/?next=%2F" rel='noopener noreferrer' target='blank
            '>
                <FaInstagram className='text-white hover:-translate-y-2 transition ease-in-out delay-100'/>  
            </a>

   </div>
</nav>

</>

    )
}   
export default Navbar;