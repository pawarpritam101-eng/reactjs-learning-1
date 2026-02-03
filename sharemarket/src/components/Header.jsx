import React from 'react' 

export default function Header() {
  return (
     <section className='bg-black max-w-300 h-250 text-white flex justify-center py-3'>
  {/* <div className="w-70 h-125 border-2 border-blue-500 p-4"> */}
  
  <div className="flex flex-col gap-7 py-16 items-center">
    <div className="inline-flex  gap-3 items-center border-2 rounded-[40px] border-gray-700 p-2 text-center w-80 h-10.5  px-5 py-2 whitespace-nowrap font-normal text-[16px] text-purple-400 ">
       <span className='flex items-center justify-center border-black rounded-[40px] w-10 h-4.5 p-2.5 bg-purple-600 text-[10px] font-bold text-white'>New </span>
      Latest Integration Just Allowed
    </div>

    <div className="flex border items-center w-147 h-80 g-16 t-0 ">
      <div className='w-147 h-42'>
      <p className='text-[82px] font-medium'>Boost your <span className='text-bg-linear-to-b from-[rgba(179,114,207,1)] to-[rgba(255,255,255,1)]' >ranking with AI</span></p>
    </div>
    <p className='font-normal text-[20px]'>Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
    </div>

    <div className="border-2 border-red-500 p-4 text-center text-red-500">
      some text here
    </div>
  </div>

{/* </div> */}

     </section>

  )
}

