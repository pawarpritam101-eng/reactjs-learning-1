import React from 'react' 

export default function Header() {
  return (
     <section className='bg-black max-w-300 h-250 text-white flex justify-center py-3'>
  {/* <div className="w-70 h-125 border-2 border-blue-500 p-4"> */}
  
  <div className="flex flex-col gap-7 py-16">
    <div className="border-2 rounded-2xl border-gray-200 p-2 text-center  text-white w-72.5 h-10.5  px-3.5 py-2.2">
       <span className='border rounded-sm w-8.5 h-4.5 p-2.5 '>New </span>
      Latest Integration Just Allowed
    </div>

    <div className="border-2 border-red-500 p-4 text-center text-red-500">
      some text here
    </div>

    <div className="border-2 border-red-500 p-4 text-center text-red-500">
      some text here
    </div>
  </div>

{/* </div> */}

     </section>

  )
}

