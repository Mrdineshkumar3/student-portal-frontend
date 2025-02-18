import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import profile from './profile1.png'
import searchicon from './1739540867404.png'
import { useNavigate } from 'react-router-dom'
function Listofstudent({fill1}) {
const usenavigate = useNavigate()
const [studentarrayq,setStudentarrayq]=useState([])    
const [permen,setPermen]=useState([])
const [lastfill,setLastfill]=useState()

useEffect(()=>{
  axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/getallstudent`)
  .then(result =>{console.log(result)
    
    const dasa = result.data.filter(item => item.sdept == fill1.unikey)
     setStudentarrayq(dasa)
     setPermen(dasa)
     

     

  } )
  .catch(err => console.log(err))

},[])
console.log(lastfill)
useEffect(()=>{
  const ccc = permen.filter(item=> item.sname.toLowerCase().includes(lastfill.toLowerCase()) || item.sregno.includes(lastfill) || item.sbranch.toLowerCase().includes(lastfill.toLowerCase()) || item.sregno.includes(lastfill) || item.sdept.toLowerCase().includes(lastfill.toLowerCase()) || item.sregno.includes(lastfill) || item.syear.toLowerCase().includes(lastfill.toLowerCase()) )
  setStudentarrayq(ccc)
},[lastfill])


const handledelte = (id) =>{
  axios.delete(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/deletestudent/`+id)
  .then(result =>{console.log(result)
    axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/getallstudent`)
    .then(result =>{console.log(result)
     const dasa = result.data.filter(item => item.sdept == fill1.unikey)
     setStudentarrayq(dasa) 
    } )
  })
  .catch(err => console.log(err))
}
  return (
    <div>
        <div className='bg-[#f4f5f46c] min-h-screen '>
            <h2 className=' backg  text-center py-4 px-2 text-white font-bold sora-sty '>{fill1.name}</h2>
            <div className='w-[100%]  pt-4  pl-5 pr-5 mb-[50px] '>
              <div className='max-w-[600px]  relative m-auto '>
              <input type="text" autoCorrect={false} onChange={(e)=>{setLastfill(e.target.value) }} className='w-[100%]  absolute text-gray-500  pl-5 outline-none rounded-md doing h-12' placeholder='Search here ... ' />
              <img src={searchicon} alt="" className='w-[30px] absolute right-[10px] top-[7px] opacity-[0.5]'  />
              </div>
              
            </div>
            <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 p-10  gap-10  max-2xl:p-5 max-2xl:gap-5  '>
                {studentarrayq.map((item,index)=>{
                    return<>
                    <div className='bg-white rounded-md max-sm:flex max-sm:items-center max-sm:justify-center max-md:flex-col'>
                        <div className='p-10 flex max-sm:gap-10  max-2xl:gap-4 gap-10  items-center'>
                        <img src={profile} alt="profile image" className='w-[100px]' />
                        <div className='flex  text-gray-600 font-[500] text-[20px]'> <p className=''><p className='pl-4'>{item.sname}</p></p></div>

                        </div>
                        <div className='flex items-end max-2xl:flex-col max-2xl:items-start pb-10'>
                        <div className='px-10 w-[100%]'>
                         <div className='flex  text-gray-600'><p className='w-[100px] max-md:w-[80px] font-[500]'>REG NO </p> <p className=''>: <span className='pl-4'>{item.sregno}</span></p></div>
                        <div className='flex  text-gray-600'><p className='w-[100px] max-md:w-[80px] font-[500]'>BRANCH </p> <p className=''>: <span className='pl-4'>{item.sbranch}</span></p></div>
                        <div className='flex  text-gray-600'><p className='w-[100px] max-md:w-[80px] font-[500]'>DEPT </p> <p className=''>: <span className='pl-4'>{item.sdept}</span></p></div>
                        <div className='flex  text-gray-600'><p className='w-[100px] max-md:w-[80px] font-[500]'>YEAR </p> <p className=''>: <span className='pl-4'>{item.syear}</span></p></div>
                       
                       
                        </div>
                        <div className='max-2xl:px-[15px] pt-3 max-2xl:flex '>
                      

                            {/* <button className='py-1 w-[100px] text-white bg-green-500 text-[13px] font-[500] rounded-sm mx-1 my-1' onClick={()=>{usenavigate(`/update/${item._id}`)}}>UPDATE</button> */}
                            
                           
                         <button className="noselect button4 " onClick={()=>{usenavigate(`/update/${item._id}`)}} ><span className="text">Update</span><span className="icon"><svg class="svg" viewBox="0 0 512 512">
                         <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg></span></button>
                        
                          
                         <button className="noselect button3" onClick={()=>{handledelte(item._id)}}><span className="text">Delete</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                            {/* <button className='py-1 w-[100px] text-white bg-black text-[13px] font-[500] rounded-sm mx-1 my-1 ' onClick={()=>{handledelte(item._id)}}>DELETE</button> */}
                        </div>
                        </div>
                        
                       
                    </div>
                    </>
                })}
            </div>
        </div>
    </div>
  )
}

export default Listofstudent