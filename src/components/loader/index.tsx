import React from 'react'
import "./index.css"
const Loading = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full h-[100vh]">

    <div className="lds-hourglass"></div>
<span className='text-[32px] text-green-600 font-semibold ml-[22px]'>Loading...</span>
    </div>
  )
}

export default Loading