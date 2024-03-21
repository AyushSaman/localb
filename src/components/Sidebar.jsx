import React from 'react'

function Sidebar(props) {
  // alert(props.isExpanded);
  return (
    // <div className={`absolute right-0  z-50 h-full bg-blue-500 justify-center items-center ${props.isExpanded? 'w-5/6 flex-col md:w-1/3': 'w-0 hidden'}  transition-all`}>
    // <div className={`absolute right-0  z-50 h-full bg-blue-500 justify-center items-center ${props.isExpanded? 'w-5/6 flex-col md:w-1/3': 'w-0 hidden'}  transition-all`}>
    //  <ul className="flex space-x-4">
    //         <li><a href="/register">Register</a></li>
    //         <li><a href="/login">Login</a></li>
    //       </ul>
    // <li><a href="/">Home</a></li>
    //         <li><a href="/about">About</a></li>
    //         <li><a href="/services">Services</a></li>
    //     <li><a href="/contact">Contact</a></li>
    
    // </div>

    <div className={`z-40 fixed text-xl top-0 right-0 h-full w-2/3 bg-blue-500 text-white flex flex-col items-center justify-center transition-transform transform ${props.isExpanded ? 'translate-x-0' : 'translate-x-full'} md:w-1/3 text-2xl`}>
          <a href="/" className="py-3 px-4  text-white hover:bg-white hover:text-blue-500 focus:outline-none hover:rounded-xl focus:ring focus:text-blue-400">
           Home
         </a>
         <a href="/about" className="py-3 px-4  text-white hover:bg-white hover:text-blue-500 focus:outline-none hover:rounded-xl focus:ring focus:text-blue-400">
         About
         </a>
         <a href="/services" className="py-3 px-4  text-white hover:bg-white hover:text-blue-500 focus:outline-none hover:rounded-xl focus:ring focus:text-blue-400">
         Services
         </a>
         <a href="/contact" className="py-3 px-4  text-white hover:bg-white hover:text-blue-500 focus:outline-none hover:rounded-xl focus:ring focus:text-blue-400">
         Contact
         </a>
    </div>
    
  ) 
}

export default Sidebar



{/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li> */}