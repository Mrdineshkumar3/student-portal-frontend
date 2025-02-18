import React from 'react'
import '../App.css'
import degree from  '../degree.png'
import database from  '../database.png'
import { useNavigate } from 'react-router-dom'
function HomeZ() {
  const usenavigate = useNavigate()
  return (
    <div className='backg h-[100vh] flex items-center justify-center overflow-hidden'>
        <div className='absolute w-[100vw] h-[100vh] z-[0] overflow-hidden'>
           <img src={degree} alt="" className='absolute right-[30px] top-[20px] w-[270px] max-md:w-[160px] han3' />
           <img src={database} alt="" className='absolute bottom-[150px] rotate-[-15deg] left-[100px] max-md:bottom-[70px] w-[80px] max-md:w-[40px] han4' />
           <img src={database} alt="" className='absolute bottom-[50px] rotate-[10deg] left-[200px]  max-md:left-[170px] w-[80px] max-md:w-[40px] han5' />
        </div>
        <div>
        
        <div className='text-center relative z-[1]'>
          <h2 className='text-white text-[20px] font-[600] han'>Hello User ! </h2>
          <h1 className='text-white font-bold text-[60px] max-sm:text-[45px] han'>STUDENT INFO PORTAL </h1>
          <p className='text-white text-[14px] font-[500] han px-3 max-sm:px-6'>We're excited to have you here! and here you explore more by clicking Add Student and Get Info</p>
          <div className='flex items-center justify-center gap-3 mt-5 '>
            <button className='bg-white px-3 py-3 text-[#68c260] w-[200px] max-sm:w-[150px] han1' onClick={()=>{usenavigate('/createstudent')}}>ADD STUDENT</button>
            <button className='bg-white px-3 py-3 text-[#68c260] w-[200px] max-sm:w-[150px] han2' onClick={()=>{usenavigate('/studentindex')}}>GET INFO</button>
          </div>
        </div>
        
        </div>
       
    </div>
  )
}

export default HomeZ