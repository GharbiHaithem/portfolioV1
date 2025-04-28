import React from 'react'
import i from '../assets/portrait-happy-smiling-young-businessman-blue-suit-isolated-white-wall.jpg'
import './Hero.css'
import { VscVerifiedFilled } from "react-icons/vsc";
import i1 from '../assets/Animation - 1745613539245 (3).gif'
const Hero = () => {
  return (
    <div className='mt-10 flex justify-between gap-10'>

<div className='md:w-3/4 w-full'>
<div className='flex items-end md:justify-start  justify-center gap-5'>
<div className=' me w-[120px] p-2 h-[120px] flex items-center justify-center  rounded-full'>
            <img className='w-[100px] h-[100px] object-cover rounded-full' src={i} />
      </div>
      <VscVerifiedFilled className='text-3xl' style={{color:"var(--blue)",  transform: "translateY(-15px)",
  transition: "transform 0.3s ease" /* Optional */ }} />
</div>
<h1 className='md:text-2xl text-xl  font-bold mt-4'>Software Engineer & UI/UX Designer</h1>
<p className='md:text-base text-sm md:font-light font-extralight mt-2'> Passionate about building modern web applications with MongoDB, Express.js, React, and Node.js (MERN). I specialize in creating responsive, high-performance interfaces using Tailwind CSS, Bootstrap, and Angular, while ensuring seamless user experiences through thoughtful<b style={{color:'var(--blue)'}}> UI/UX</b> design.</p>
 
</div>
<div className='md:w-1/4 hidden md:flex items-center justify-center '>
<img className='w-[320px] object-cover h-[250px]' src={i1} />
</div>
   </div>
  )
}

export default Hero