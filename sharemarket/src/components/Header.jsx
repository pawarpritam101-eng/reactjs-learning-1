import React from 'react' 
import App from '../assets/appwide.png'

export default function Header() {
  return (
   <section className="bg-black  w-full text-white flex justify-center">
  {/* Content wrapper */}
  <div className="w-full max-w-300 px-6 pt-24 text-center">

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
      <h1 className="text-[82px] leading-[84px] font-medium max-w-[800px]">
        Boost your <br />
        <span className="bg-gradient-to-b from-white bg-clip-text text-transparent to-[rgba(170,116,207,1)] ">
          rankings with AI.
        </span>
      </h1>
    </div>

    {/* Description */}
    <div className="mt-6 flex justify-center">
      <p className="text-[20px] text-gray-200 max-w-[520px] leading-relaxed">
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

<div className="relative mx-auto">
  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2
    w-[90%] h-[60%]
    bg-purple-600/40
    blur-3xl -z-10" />

  <img src={App} className="rounded-2xl" />
</div>



  </div>
</section>


  )
}

