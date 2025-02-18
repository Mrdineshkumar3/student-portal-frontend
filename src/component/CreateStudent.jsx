import React, { useEffect, useState } from 'react'
import axios from 'axios'
import circle from './circle.png'
import '../App.css'
import { useNavigate } from 'react-router-dom'
function CreateStudent() {
    const usenavigate = useNavigate()
    const [sname,setName]=useState()
    const [sregno,setRegno]=useState()
    const [sbranch,setBranch]=useState()
    const [sdept,setDept]=useState()
    const [syear,setYear]=useState()
    const [err,seterr]=useState({stuname:'',sturegno:'',stubranch:'',studept:'',stuyear:''})
    const validate = () =>{
        let formErrors = { stuname:'',sturegno:'',stubranch:'',studept:'',stuyear:''};
       let isValid = true;
       if(!sname){
         formErrors.stuname="Student name is required"
         isValid=false
       }
       if(!sregno){
         formErrors.sturegno="Register number is required"
         isValid =false
       }
       if(!sbranch){
        formErrors.stubranch="Branch is required"
        isValid =false
      } if(!sdept){
        formErrors.studept="Department is required"
        isValid =false
      } if(!syear){
        formErrors.stuyear="Year is required"
        isValid =false
      }
       seterr(formErrors)
       return isValid
     }
     const [show,setShow]=useState(false)
     const showing = () =>{
      setShow(true)
      setTimeout(()=>{
        setShow(false)
      },[4000])
     }
     const formhandle = (e) =>{
        e.preventDefault()
        if(validate()){

          axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/createuser`,{sname,sregno,sbranch,sdept,syear})
          .then(resultinfo => {console.log(resultinfo) })
          .catch(err => console.log(err))
          showing()
        //   axios.post('http://localhost:3001/homepage',{sname,sregno,sbranch,sdept,syear})
        //   .then(resultinfo => {console.log(resultinfo)
           
        //   })
        //   .catch(err => console.log(err))
           
        //   axios.post('http://localhost:3001/homepage0',{sname,sregno,sbranch,sdept,syear})
        //   .then(resultinfo => {console.log(resultinfo)
        //     setStudentarray(resultinfo.data)
        
           
        //   })
          setName('')
          setBranch('')
          setDept('')
          setRegno('')
          setYear('')
        
        }
      
        }
      
  return (
    <div className='backg  min-h-[100vh] flex items-center justify-center aaa '>
      <div className=''>
      <img src={circle} alt="" className='fuc absolute w-[450px] z-1 left-[130px] max-sm:left-0 top-0 opacity-[0.3]' />
      <img src={circle} alt="" className='fuc absolute w-[500px] z-1 right-[130px] bottom-0 max-sm:right-0 max-sm:bottom-0 opacity-[0.3]' />
      </div>
        <div className={`absolute right-auto top-[5px]  some ${show?'active':''}`}>
        
<div class="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
  <div
    class="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]"
  >
    <div class="flex gap-2">
      <div class="text-[#2b9875] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          ></path>
        </svg>
      </div>
      <div>
        <p class="text-white">done successfully :)</p>
        <p class="text-gray-500">Student information added.</p>
      </div>
    </div>
    <button
      class="text-gray-600  hover:bg-white/5 p-1 rounded-md transition-colors ease-linear" onClick={()=>{setShow(false)}}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>
</div>

        </div>
        <div className="absolute max-md:bottom-6 max-md:right-[auto] md:right-5 md:top-5    max-lg:scale-[0.6]  ">
       
<button className='button2 scale-[0.9]' onClick={()=>{usenavigate('/studentindex')}}>
    <span>GET INFO</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34">
        <circle stroke-width="3" stroke="#49cf3d" r="35.5" cy="37" cx="37"></circle>
        <path fill="#49cf3d" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
    </svg>
</button>
        </div>
        <div className='flex items-center justify-center flex-col gap-8 p-11  max-sm:px-3  relative z-[2] '>
        <div className='bg-white rounded-[5px] overflow-hidden pb-[50px] max-sm:pb-[20px] bob'>
      {/* <h2 className='font-bold text-center py-4 bg-[#5ad24f] text-white mb-4'>STUDENT INFORMATIONS</h2> */}
      <h2 className='font-bold text-center py-4 bg-[black] text-white mb-10 max-sm:mb-5'>STUDENT INFORMATIONS</h2>
      <form onSubmit={formhandle} >
        <div className='py-4 px-28 max-sm:px-6 wwq'>
          <label htmlFor="name" className='font-serif w-[100px] max-sm:w-[70px] www inline-block font-[400] text-gray-600 max-sm:pb-3'>Name</label>
          <input type="text"  id='name' className='p-2 text-center pl-3 outline-none bg-gray-100 font-[400] text-gray-700 text-[14px] w-[300px] wwi max-sm:w-[200px] rounded-sm'
           value={sname}
         onChange={(e)=>{
            setName(e.target.value)
          }} />
          {err.stuname && <p style={{ color: 'red' }}  className='font-[400] pt-1 pl-[100px] max-sm:text-[13px] max-sm:pl-[70px]'>{err.stuname}</p>}
        </div>
        <div className='py-4 px-28 max-sm:px-6 wwq'>
          <label htmlFor="regno"  className='font-serif w-[100px] www  max-sm:w-[70px] inline-block font-[400] text-gray-600 max-sm:pb-3'>Reg No</label>
          <input type="text"  id='regno'  className='p-2 text-center pl-3 wwi  bg-gray-100 outline-none font-[400] text-gray-700 text-[14px] w-[300px] max-sm:w-[200px] rounded-sm' 
          value={sregno}
          onChange={(e)=>{
            setRegno(e.target.value)
          }}/>
           {err.sturegno && <p style={{ color: 'red' }}  className='font-[400] pt-1 pl-[100px] max-sm:text-[13px] max-sm:pl-[70px]'>{err.sturegno}</p>}
        </div>
        <div className='py-4 px-28 max-sm:px-6 wwq'>
          <label htmlFor="branch"  className='font-serif w-[100px] www  max-sm:w-[70px]  inline-block font-[400] text-gray-600 max-sm:pb-3'>Branch</label>
          {/* <input type="text" placeholder='Enter Branch'/> */}
         <select name=""   id='branch'  className='p-2 pl-3 outline-none wwi text-center bg-gray-100 text-gray-700 text-[14px] font-[400] w-[300px] max-sm:w-[200px] rounded-sm'
          value={sbranch}
          onChange={(e)=>{
            setBranch(e.target.value)
          }}>
            <option value=""></option>
          <option value="BE" >BE</option>
          <option value="BTECH">BTECH</option>
         </select>
         {err.stubranch && <p style={{ color: 'red' }}  className='font-[400] pt-1 pl-[100px] max-sm:text-[13px] max-sm:pl-[70px]'>{err.stubranch}</p>}

        </div>
        <div className='py-4 px-28 max-sm:px-6 wwq'>
          <label htmlFor="dept"  className='font-serif w-[100px] www  max-sm:w-[70px]  inline-block font-[400] text-gray-600 max-sm:pb-3'>Dept</label>
         
           <select name=""   id='dept'  className='p-2 pl-3 outline-none wwi text-center  bg-gray-100 text-gray-700 text-[14px] font-[400] w-[300px] max-sm:w-[200px] rounded-sm'
          value={sdept}
          onChange={(e)=>{
            setDept(e.target.value)
          }}>
            <option value="" className=' bg-gray-100 '></option>
          <option value="IT" >IT</option>
          <option value="CSE">CSE</option>
          <option value="MECH">MECH</option>
          <option value="EEE">EEE</option>
          <option value="ECE">ECE</option>
          <option value="AUTO">AUTO</option>
          <option value="CIVIL">CIVIL</option>
         </select>
         {err.studept && <p style={{ color: 'red' }}  className='font-[400] pt-1 pl-[100px] max-sm:text-[13px] max-sm:pl-[70px]'>{err.studept}</p>}

        </div>
       
        <div className='py-4 px-28 max-sm:px-6 wwq'>
          <label htmlFor="year"  className='font-serif w-[100px] www  max-sm:w-[70px] inline-block font-[400] text-gray-600 max-sm:pb-3'>Year</label>
          
          <select name=""   id='year'  className='p-2  pl-3  bg-gray-100 wwi text-center text-gray-700 text-[14px]  outline-none font-[400] w-[300px] max-sm:w-[200px] rounded-sm'
          value={syear}
          onChange={(e)=>{
            setYear(e.target.value)
          }}>
            <option value=""></option>
          <option value="1ST YEAR" >1ST YEAR</option>
          <option value="2ND YEAR">2ND YEAR</option>
          <option value="3RD YEAR">3RD YEAR</option>
          <option value="FINAL YEAR">FINAL YEAR</option>
         
         </select>
         {err.stuyear && <p style={{ color: 'red' }}  className='font-[400] pt-1 pl-[100px] max-sm:text-[13px] max-sm:pl-[70px]'>{err.stuyear}</p>}

        </div>
   
       <div className='text-center pb-5 mt-[50px] max-sm:mt-5 flex items-center justify-center'>
      
<button className='botton0' type='submit'>
  <svg
    aria-hidden="true"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-width="2"
      stroke="#fffffff"
      d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
    <path
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="#fffffff"
      d="M17 15V18M17 21V18M17 18H14M17 18H20"
    ></path>
  </svg>
  ADD STUDENT
</button>

        {/* 
      <button className=' bg-[#5ad24f] text-white px-11 py-1' type='submit'>ENTER</button> */}
       </div>
      </form>

     </div>
        </div>
        
        </div>
  )
}

export default CreateStudent