import React, { useState } from 'react'
import './Main.css'
import { FaGithub } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { FaRocketchat } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { PiNetworkThin } from "react-icons/pi";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
const myProjects = [
  { title: 'E-commerce Website', category: 'e-commerce',description:`
     <ul class="features-list  text-xs">
    <li><span class="bullet">🔹</span> <strong>Frontend</strong> : React.js + Redux Toolkit (interface dynamique)</li>
    <li><span class="bullet">🔹</span> <strong>Backend</strong> : Node.js + Express.js (API RESTful)</li>
    <li><span class="bullet">🔹</span> <strong>Base de données</strong> : MongoDB (flexible et scalable)</li>
    <li><span class="bullet">🔹</span> <strong>Authentification</strong> : JWT (sécurisée)</li>
    <li><span class="bullet">🔹</span> <strong>Paiements</strong> : Stripe/PayPal (intégration sécurisée)</li>
    <li><span class="bullet">🔹</span> <strong>Admin Dashboard</strong> : Gestion produits/commandes</li>
    <li><span class="bullet">🔹</span> <strong>UI/UX</strong> : Tailwind CSS ou Material-UI (design responsive)</li>
  </ul>
    `, imagePath: 'https://www.raghwendra.com/blog/wp-content/uploads/2022/08/eCommerce-website.jpg' },
  { title: 'Tchat Application', category: 'tchat',description:`
 <div class="ecommerce-description">
  <h2 class="section-title">Site e-commerce full-stack moderne utilisant :</h2>
  
  <div class="tech-stack">
    <div class="stack-category">
      <h3 class="category-title">Stack Technique</h3>
      <ul class="feature-list">
        <li><span class="bullet">🔹</span> <strong>Frontend</strong>: React.js + Context API ou Redux</li>
        <li><span class="bullet">🔹</span> <strong>Backend</strong>: Node.js + Express.js</li>
        <li><span class="bullet">🔹</span> <strong>Base de données</strong>: MongoDB</li>
        <li><span class="bullet">🔹</span> <strong>Realtime</strong>: Socket.IO</li>
        <li><span class="bullet">🔹</span> <strong>Authentification</strong>: JWT + Bcrypt</li>
        <li><span class="bullet">🔹</span> <strong>UI</strong>: Tailwind CSS ou Material-UI</li>
      </ul>
    </div>
    
    <div class="features">
      <h3 class="category-title">Fonctionnalités Clés</h3>
      <ul class="feature-list key-features">
        <li><span class="bullet">🔹</span> Chat en temps réel</li>
        <li><span class="bullet">🔹</span> Partage de fichiers</li>
        <li><span class="bullet">🔹</span> Notifications push</li>
        <li><span class="bullet">🔹</span> Chats privés & groupes</li>
        <li><span class="bullet">🔹</span> Responsive design</li>
      </ul>
    </div>
  </div>
</div>




    `, imagePath: 'https://img.freepik.com/free-vector/live-chat-website-online-service-conversation-with-customer-support-vector-landing-page-live-client-support-with-isometric-illustration-smartphones-with-messenger-interface-people_107791-8845.jpg' },
  { title: 'Social Media', category: 'socialmedia', imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksjroZekyg-736DnPPBeyoCuNn87CAgcRpQ&s' },
  {title:'Youtube Clone' , category:'youtube' ,imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xLX1M95oB8fZ42vWrzp4mXJLcPCy2nTGqg&s'},
  {title:'3S Security',category:'Security' , imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggPSG-YQA11nBaMPVpuyph9W2QRLEIm3uxA&s'},
  {title:'Sérigraphie Website' , category:'serigraphie' , imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVnGZ3s0uz7YAYB8BsuxGFbXvZ7P9MFZamQ&s'}

]
const Main = ({setTheme,theme}) => {
  const[newArr,setNewArr]= useState(myProjects)
  const[active,setActive]=useState(null)
  const filterByCategory = (category) => {
    // Si on clique sur la même catégorie, réinitialiser
    if (active === category) {
      setNewArr(myProjects);
      setActive(null);
    } else {
      setActive(category);
      setNewArr(myProjects.filter(item => 
        item?.category?.toLowerCase() === category.toLowerCase()
      ));
    }
  };
  console.log(newArr)
  return (

 <div className='flex flex-col gap-10  mt-5'>
  <div className='flex flex-wrap gap-5'>
  <button style={{
  background: 'linear-gradient(to right, #d7dde3, #97a5bb, #616f93, #363b6a, #12093f)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent'
}} onClick={() => filterByCategory('e-commerce')}  className={`${active==='e-commerce' ?'active' : ''} md:text-lg font-semibold  text-sm ${theme==="dark"  ? 'dark' : null} rounded-md px-2 py-2 btn`} ><HiShoppingBag style={{color:'var(--blue)'}} className='text-2xl'/>E-Commerce </button>
  <button style={{
  background: 'linear-gradient(to right, #d7dde3, #97a5bb, #616f93, #363b6a, #12093f)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent'
}} onClick={() => filterByCategory('tchat')}  className={`${active==='tchat' ?'active' : ''}  md:text-lg text-sm font-semibold   ${theme==="dark" ? 'dark' : null} rounded-md px-2 py-2 btn`} ><FaRocketchat style={{color:'var(--blue)'}} className='text-2xl'/>Chat Application </button>
  <button style={{
  background: 'linear-gradient(to right, #d7dde3, #97a5bb, #616f93, #363b6a, #12093f)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent'
}}  onClick={() => filterByCategory('socialmedia')} className={` md:text-lg text-sm ${theme==="dark" ? 'dark' : null} font-semibold  rounded-md px-2 py-2 btn`} ><PiNetworkThin  style={{color:'var(--blue)'}} className='text-2xl'/>Social Media </button>
  <button style={{
  background: 'linear-gradient(to right, #d7dde3, #97a5bb, #616f93, #363b6a, #12093f)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent'
}} onClick={() => filterByCategory('Security')} className={` md:text-lg text-sm ${theme==="dark" ? 'dark' : null} font-semibold rounded-md px-2 py-2 btn`} ><CiYoutube style={{color:'var(--blue)'}}  className='text-2xl'/>Youtube Clone </button>
  <button style={{
  background: 'linear-gradient(to right, #d7dde3, #97a5bb, #616f93, #363b6a, #12093f)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent'
}} onClick={() => filterByCategory('serigraphie')} className={` md:text-lg text-sm ${theme==="dark" ? 'dark' : null} font-semibold  rounded-md px-2 py-2 btn`} ><MdOutlineSecurity style={{color:'var(--blue)'}} className='text-2xl'   />3S Security </button>
  </div>
     <div className='flex flex-wrap gap-5 mt-5'>
      {newArr && newArr?.map((item,i) => (
        <div  key={i} className={`card  ${theme==='dark' ? 'bg-[#39383868]' :'bg-white'}  md:w-[calc(25%-20px)] w-[80%] mx-auto
         transition-filter duration-500 ease-in-out rounded-lg `}>
          <div className="max-w-sm   rounded-lg shadow-sm dark:bg-gray-800 ">
           
              <img className="rounded-t-lg h-[150px] w-full object-cover  " src={item.imagePath} alt="" />
           
            <div className="p-5">
            
                <h5 className="mb-2 text-xl font-bold tracking-tight  dark:text-white">{item.title}</h5>
              
              <p className='text-sm font-light'>Un site e-commerce full-stack moderne utilisant :
           
              {/* <div 
      dangerouslySetInnerHTML={{ __html: item.description }}
      className="tech-stack-container"
    /> */}
  





              
              


             </p>
            <div className='flex items-center justify-between'>
           <div className='flex gap-4'>
           <BsLink  className='text-2xl'/>
           <FaGithub  className='text-2xl'/>
           </div>
              <button className="inline-flex more   mt-3 items-center  mb-2 p-1 mx-2 px-2 text-sm font-medium text-center">
                 more
                 <HiMiniArrowRightCircle />
              </button>
            </div>
            </div>
          </div>
        </div>
      ))}




    </div>
 </div>

  )
}

export default Main