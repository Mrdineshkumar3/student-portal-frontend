import React from 'react'
import errorimage from './3675683.jpg'
import { useNavigate } from 'react-router-dom'
function EmailError() {
    const usenavigate = useNavigate()
  return (
    <div className='flex items-center h-[100vh] justify-around flex-col p-7 bg-black'>
      {/* <div className='text-[21px]'>
      <p>Incorrect Email or Incorrect Password</p>
      <p className='text-center underline cursor-pointer' onClick={()=>{usenavigate('/login')}} >Go Back</p>
      </div>
       
        <div className=''>
            <img src={errorimage} alt="" className='w-[300px]' />
        </div> */}

              <div className='text-gray-400 border border-x-0 p-4 teko-sty text-[20px]'>
              <div className='flex '>
                <p className='w-[60px]'>Error </p>
                <p><span className='pr-2'>:</span> 404 Not Founded</p>
              </div>
              <div className='flex'>
                <p className='w-[60px]'>Reason </p>
                <p><span className='pr-2'>:</span> Incorrect Email or Incorrect Password</p>
              </div>
              <div className='flex'>
                <p className='w-[60px]'>Link </p>
                <p className='cursor-pointer' onClick={()=>{usenavigate('/login')}}><span className='pr-2'>:</span> Go Back</p>
              </div>
            </div>
    </div>
  )
}

export default EmailError