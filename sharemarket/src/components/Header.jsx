import React from 'react' 
import App from '../assets/appwide.png'

export default function Header() {
  return (
   <section className="bg-black  w-full  text-white ">
  {/* Content wrapper */}
  <div className="w-full max-w-300 mx-auto px-6 pt-24 text-center">

    {/* Badge */}
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-3 border border-gray-700 rounded-full px-5 py-2 text-sm">
        <span className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
          NEW
        </span>
        Latest integration just arrived
      </div>
    </div>

    {/* Heading */}
    <div className="mt-10 flex justify-center">
      <h1 className="text-[82px] leading-21 font-medium max-w-200">
        Boost your <br />
        <span className="bg-linear-to-b from-white bg-clip-text text-transparent to-[#763f9a] ">
          rankings with AI.
        </span>
      </h1>
    </div>

    {/* Description */}
    <div className="mt-6 flex justify-center">
      <p className="text-[20px] text-gray-200 max-w-130 leading-relaxed">
        Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
      </p>
    </div>

    {/* Button */}
    <div className="mt-10 flex justify-center ">
  <div className="rounded-lg border-2 border-gray-500 p-2">
  <button className="bg-white text-black text-[15px] font-medium px-6
        py-2.5 rounded-lg leading-8">Start for free</button>
  </div>
</div>

{/* Image Container */}
 <div className="relative w-full flex justify-end mt-15 pl-28">
  <div className='absolute bottom-22 flex items-center justify-center z-5'>
 <div className="w-260 h-150  bg-purple-500/40  blur-[100px] z-0 rounded-lg"/></div>
  <div className="relative z-10  rounded-lg border mr-22 border-white/10 bg-black/60
   overflow-hidden">
  <img src={App} alt="App Preview" className="h-140 w-260 border border-black rounded-lg object-cover" />
    </div>
    </div>
    
    </div>


   {/* alldiv */}
</section>


  )
}