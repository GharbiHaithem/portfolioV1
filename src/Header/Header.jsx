import React, { useEffect } from 'react'
import './Header.css'
import { GoSun } from "react-icons/go";
import { RiMenuFill } from "react-icons/ri";
import { BsFillMoonFill } from "react-icons/bs";
const Header = ({open,setOpen,theme,setTheme}) => {
  useEffect(()=>{
   if(theme==="light"){
    localStorage.setItem('theme','light')
   }else{
    localStorage.setItem('theme','dark')
   }
  },[theme])
  return (
 <div className={`fixed top-0 left-0 w-full z-50 ${theme==="light" ? 'bg-white' : 'bg-gray-900'}  shadow-sm`}>
      <header className='container mx-auto px-4 flex justify-between items-center py-4 md:py-5'>
  <div className='md:block hidden'/>
      <div className='darkmode'  onClick={()=>setOpen(true)}><RiMenuFill className='text-2xl sun'  /> </div>
<nav className={`${theme} md:block hidden`}>
      <ul className='flex items-center gap-10'>
            <li><a >About</a></li>
            <li><a>Articles</a></li>
            <li><a>Projects</a></li>
            <li><a>Speaking</a></li>
            <li><a>Contact</a></li>
      </ul>
      </nav>
      <div className=' rounded-full x p-2'>{theme==="light" ? <GoSun className='text-2xl sun'  onClick={()=>setTheme('dark')} /> : <BsFillMoonFill className='text-2xl sun' onClick={()=>setTheme('light')} />}</div>
    </header>
</div>
  )
}

export default Header