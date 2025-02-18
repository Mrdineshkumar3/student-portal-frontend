import React from 'react'
import errorimage from './6463815.jpg'
import { useNavigate } from 'react-router-dom'
function Exists() {
    const usenavigate = useNavigate()
  return (
     <div className='flex items-center h-[100vh] justify-around flex-col p-7 bg-black'>

          {/* <div className='text-[21px]'>
          <p>This Email id is aldeady Exists</p>
          <p className='text-center underline cursor-pointer' onClick={()=>{usenavigate('/login')}} >Go Login</p>
          </div>
           
            <div className=''>
                <img src={errorimage} alt="" className='w-[300px]' />
            </div> */}
            <div className='text-gray-400 border border-x-0 p-4 teko-sty text-[20px]'>
              <div className='flex'>
                <p className='w-[60px]'>Error </p>
                <p><span className='pr-2'>:</span> 404 Not Founded</p>
              </div>
              <div className='flex'>
                <p className='w-[60px]'>Reason </p>
                <p><span className='pr-2'>:</span> This Email id is aldeady Exists</p>
              </div>
              <div className='flex'>
                <p className='w-[60px]'>Link </p>
                <p className='cursor-pointer' onClick={()=>{usenavigate('/login')}}><span className='pr-2'>:</span> Go to Login</p>
              </div>
            </div>
        </div>
  )
}

export default Exists