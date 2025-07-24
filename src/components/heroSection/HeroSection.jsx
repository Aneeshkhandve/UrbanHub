import React, { useState } from 'react'
import Loader from '../loader/Loader'

function HeroSection() {
  const [loading,setLoading] = useState(false);
  const handleClick = ()=>{
    setLoading(true)
  }
  return (
    <div className='relative h-[400px] md:h-[500px] lg:h-[600px] w-[full]'>
      <img src="hero-hoodie.png" alt="" className='w-full h-full object-cover' />
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-6 md:pl-12  ">
        <h1 className='text-black font-bold text-3xl md:text-4xl mb-2'>Find Your Style with Our<br />
        <span className="text-black text-3xl md:text-4xl font-bold mb-2">Hoodie Collection</span>
        </h1>
        <button onClick={handleClick} className='text-sm md:text-base bg-orange-500 text-white rounded-md mt-4 px-6 py-2 hover:bg-orange-600 transition'>Explore Collection</button>
      </div>
    </div>

  )
}

export default HeroSection
