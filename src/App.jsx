import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Main from './Main/Main'
import { CgClose } from "react-icons/cg";
import Contact from './Contact/Contact'
import { Toaster } from 'react-hot-toast'
function App() {
  const[open,setOpen] = useState(false)
  const[theme,setTheme] = useState(localStorage.getItem('theme'))
  
  return (
    <div className={` ${theme} mb-5 h-[max-content]`}>
    <div className='md:w-[80%] w-full  p-5 mx-auto '>
   <Header setTheme={setTheme} theme={theme} setOpen={setOpen} open={open}/>
 <div className='py-10'>
 <Hero />
   <div className='divider' />
   <Main theme={theme} setTheme={setTheme}/>
   <div className='divider' />
   <Contact theme={theme}/>
 </div>
    </div>
    {open&& <div className='fixed w-full h-full  top-0 z-50 left-0 backdrop-blur-md p-5'> 
      <nav className={`px-2 py-2 mb-4  rounded-lg shadow-sm shadow-slate-100 ${theme==="light" ? 'bg-[#fff]' :'bg-[#0008]'}  relative`}>
        <span className='absolute right-2 top-2 c cursor-pointer'  onClick={()=>setOpen(false)}><CgClose className='text-3xl'/></span>
        <ul className='flex gap-3 flex-col'>
          <li><a  >About</a></li>
          <li><a  >About</a></li>
          <li><a > About</a></li>
          <li><a >  About</a></li>
          <li><a >About</a></li>
        </ul>
      </nav>
      </div>}
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    removeDelay: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    </div>
  )
}

export default App
