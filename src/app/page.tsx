import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-red-500 w-full max-w-7xl mx-auto container'>
      <Link href="./products" className='flex items-center w-[300px] bg-black text-white text-[32px]'>
      
      Click me</Link>
      <div className="flex items-center justify-between">
        <span className="flex font-semibold text-sm text-gray-300">
        Smartfonlar va gadjetlar
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
        Noutbuklar, kompyuterlar
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
     TV va proektorlar
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
        Audiotexnikalar
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
        Uy uchun texnika
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
        Go'zallik va sog'liq
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
        Oshxona uchun texnika
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
        Aqlli uy
        </span>
        <span className="flex font-semibold text-sm text-black">
       Yana <FaChevronDown />

        </span>
    
      </div>
    </div>
  )
}

export default Home