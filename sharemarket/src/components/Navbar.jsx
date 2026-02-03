import React from 'react'
import logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <header className='bg-black border w-max-full text-white z-50'>
      <nav className="max-w-full h-17 py-3.5 flex">
        {/* image */}
        <div className='flex flex-nowrap justify-between  mx-auto max-w-7xl '>
        <img src={logo} className='h-9.5 mr-3' alt='logo'/>
     
           {/* navbar */}
         <div className=" justify-between items-center w-full px-12 lg:flex lg:w-auto lg:order-1" id="mobile-menu-2" >
         <ul className="flex flex-col mt-4 font-medium border rounded-full border-gray-200 py-2 px-2 lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
         <div className='block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hoverbg-transparent lg:border-0 hover:text-red-700 lg:p-0'>
         Features
        </div> </li>
        <li>
        <div className='block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hoverbg-transparent lg:border-0 hover:text-red-700 lg:p-0'>
         Developers
        </div> </li>
          <li>
        <div className='block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hoverbg-transparent lg:border-0 hover:text-red-700 lg:p-0'>
        Company
        </div> </li>
         <li>
        <div className='block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hoverbg-transparent lg:border-0 hover:text-red-700 lg:p-0'>
        Blog
        </div> </li>
        <li>
         <div className='block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hoverbg-transparent lg:border-0 hover:text-red-700 lg:p-0'>
        Changelog
        </div> </li>  
        </ul>
        </div>

        {/* button */}
  
     <button className=" px-6 py-2 rounded-full text-white text-sm font-medium
  bg-linear-to-r from-purple-700 to-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.7) order-2">
  Join waitlist
</button>
         </div>       
      </nav>
    </header>
    
  )
}
