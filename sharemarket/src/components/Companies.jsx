import React from 'react'


export default function Companies() {
  return (
    <div className='mt-32 w-full  bg-black '>
   <p className='text-center font-medium text-[16px] leading-7 text-[rgba(255, 255, 255, 0.7)]'>Trusted by the world’s most innovative teams</p>

  {/* Companies logo */}
  <div className="mt-16 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
  
  <div className="h-28 flex items-center justify-center rounded-xl border border-gray-800">
    <img src="src/assets/companies/acmecorp.png" alt="acmecorp" className="h-10 object-contain" />
  </div>

  <div className="h-28 flex items-center justify-center rounded-xl border border-gray-800">
    <img src="src/assets/companies/apex.png" alt="apex" className="h-10 object-contain" />
  </div>

  <div className="h-28 flex items-center justify-center rounded-xl border border-gray-800">
    <img src="src/assets/companies/celestial.png" alt="celestial" className="h-10 object-contain" />
  </div>

  <div className="h-28 flex items-center justify-center rounded-xl border border-gray-800">
    <img src="src/assets/companies/echovalley.png" alt="echovalley" className="h-10 object-contain" />
  </div>

  <div className="h-28 flex items-center justify-center rounded-xl border border-gray-800">
    <img src="src/assets/companies/outside.png" alt="outside" className="h-10 object-contain" />
  </div>

  <div className="h-28 flex items-center justify-center rounded-xl border border-gray-800">
    <img src="src/assets/companies/pulse.png" alt="pulse" className="h-10 object-contain" />
  </div>

  <div className="h-28 flex items-center justify-center rounded-xl border border-gray-800">
    <img src="src/assets/companies/quantum.png" alt="quantum" className="h-10 object-contain" />
  </div>

  <div className="h-28 flex items-center justify-center rounded-xl border border-gray-800">
    <img src="src/assets/companies/twice.png" alt="twice" className="h-10 object-contain" />
  </div>

</div>

    
    </div>
    
  )
}