import React from 'react'
import Sidebar from './Sidebar'
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';


function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  function expandSidebar(e) {
    e.preventDefault();
    setSidebar(!sidebar);
  }

  return (
    <div className='overflow-hidden w-screen '>
    <header className="bg-blue-500 p-4 text-white">
      
    <nav className="flex justify-between items-center">
          <div className="logo">
            <img src="/localbajar_logo.png" alt="Localbajar Logo" className="w-40" />
          </div>

         
          <ul className="flex space-x-7 mx-9 z-50 absolute right-2 md:space-x-14">
            <li><a className='p-3 font-semibold text-lg cursor-pointer text-white hover:bg-white hover:text-blue-500 focus:outline-none hover:rounded-xl focus:ring focus:text-blue-400 md:text-xl' href="/login">Login</a></li>
            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li> */}
        <li onClick={expandSidebar} className='mt-1'><span className=' cursor-pointer'> 
          {sidebar ? <ImCross /> : <GiHamburgerMenu className="font-extrabold"  /> }
          </span>
          </li>
          </ul>
        </nav>
      </header>
      
        <Sidebar isExpanded={sidebar} />
    
    </div>
  )
}

export default Navbar