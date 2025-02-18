import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom'
function Homepage() {
  const usenavigate = useNavigate()
  const [sname,setName]=useState()
  const [sregno,setRegno]=useState()
  const [sbranch,setBranch]=useState()
  const [sdept,setDept]=useState()
  const [syear,setYear]=useState()
  const [studentarray,setStudentarray]=useState([])
  const [err,seterr]=useState({stuname:'',sturegno:''})
  useEffect(()=>{
    axios.post('http://localhost:3001/homepage0',{sname,sregno,sbranch,sdept,syear})
    .then(resultinfo => {console.log(resultinfo)
      setStudentarray(resultinfo.data)
  
     
    })
  },[])
  const validate = () =>{
     let formErrors = { stuname:'',sturegno:''};
    let isValid = true;
    if(!sname){
      formErrors.stuname="Enter student name"
      isValid=false
    }
    if(!sregno){
      formErrors.sturegno="Enter student register number"
      isValid =false
    }
    seterr(formErrors)
    return isValid
  }
  const formhandle = (e) =>{
  e.preventDefault()
  if(validate()){
    axios.post('http://localhost:3001/homepage',{sname,sregno,sbranch,sdept,syear})
    .then(resultinfo => {console.log(resultinfo)
     
    })
    .catch(err => console.log(err))
     
    axios.post('http://localhost:3001/homepage0',{sname,sregno,sbranch,sdept,syear})
    .then(resultinfo => {console.log(resultinfo)
      setStudentarray(resultinfo.data)
  
     
    })
    setName('')
    setBranch('')
    setDept('')
    setRegno('')
    setYear('')
  }

  }
  const handleDelete = (id)=>{
    axios.delete('http://localhost:3001/deleteuser'+id)
    .then(resultq =>{console.log(resultq)})
    .catch(err => console.log(err))
    
    axios.post('http://localhost:3001/homepage0',{sname,sregno,sbranch,sdept,syear})
    .then(resultinfo => {console.log(resultinfo)
      setStudentarray(resultinfo.data)
      window.location.reload()
     
    })
  }

 
  return (
    <div className='min-h-screen pb-6 bgl'>
     <div className='flex items-center justify-center flex-col gap-8 p-5'>
      <h2 className='font-bold text-white'>STUDENT INFORMATIONS</h2>
      <form onSubmit={formhandle} >
        <div className='py-2'>
          <label htmlFor="name" className='w-[100px] text-white inline-block'>Name</label>
          <input type="text" placeholder='Enter Name' id='name' className=' p-1 pl-3 outline-none font-[400] w-[300px] rounded-sm'
           value={sname}
         onChange={(e)=>{
            setName(e.target.value)
          }} />
          {err.stuname && <p style={{ color: 'red' }}  className='font-[500] pl-[100px]'>{err.stuname}</p>}
        </div>
        <div className='py-2'>
          <label htmlFor="regno"  className='w-[100px] text-white inline-block'>Reg No</label>
          <input type="text" placeholder='Enter Reg No' id='regno'  className='p-1 pl-3 outline-none font-[400] w-[300px] rounded-sm' 
          value={sregno}
          onChange={(e)=>{
            setRegno(e.target.value)
          }}/>
           {err.sturegno && <p style={{ color: 'red' }}  className='font-[500] pl-[100px]'>{err.sturegno}</p>}
        </div>
        <div className='py-2'>
          <label htmlFor="branch"  className='w-[100px] text-white inline-block'>Branch</label>
          {/* <input type="text" placeholder='Enter Branch'/> */}
         <select name=""   id='branch'  className='p-1 pl-3 outline-none font-[400] w-[300px] rounded-sm'
          value={sbranch}
          onChange={(e)=>{
            setBranch(e.target.value)
          }}>
            <option value="">-- select --</option>
          <option value="BE" >BE</option>
          <option value="BTECH">BTECH</option>
         </select>
        </div>
        <div className='py-2'>
          <label htmlFor="dept"  className='w-[100px] text-white inline-block'>Dept</label>
         
           <select name=""   id='dept'  className='p-1 pl-3 outline-none font-[400] w-[300px] rounded-sm'
          value={sdept}
          onChange={(e)=>{
            setDept(e.target.value)
          }}>
            <option value="">-- select --</option>
          <option value="IT" >IT</option>
          <option value="CSE">CSE</option>
          <option value="MECH">MECH</option>
          <option value="EEE">EEE</option>
          <option value="ECE">ECE</option>
          <option value="AUTO">AUTO</option>
         </select>
        </div>
       
        <div className='py-2'>
          <label htmlFor="year"  className='w-[100px] text-white inline-block'>Year</label>
          
          <select name=""   id='year'  className='p-1 pl-3 outline-none font-[400] w-[300px] rounded-sm'
          value={syear}
          onChange={(e)=>{
            setYear(e.target.value)
          }}>
            <option value="">-- select --</option>
          <option value="1ST YEAR" >1ST YEAR</option>
          <option value="2ND YEAR">2ND YEAR</option>
          <option value="3RD YEAR">3RD YEAR</option>
          <option value="FINAL YEAR">FINAL YEAR</option>
         
         </select>

        </div>
   
       <div className='text-center'>
        <button className='bg-white text-green-600 px-7 py-1' type='submit'>ENTER</button>
       </div>
      </form>

     </div>
     <div className='flex items-center justify-center'>
       <table className=''>
      <thead>
      <tr className='text-white border'>
          <th>NAME</th>
          <th>REG NO</th>
          <th>BRANCH</th>
          <th>DEPT</th>
          <th>YEAR</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
          studentarray.map((item,index)=>{
            return<>
               <tr key={index}>
          <td>{item.sname}</td>
          <td>{item.sregno}</td>
          <td>{item.sbranch}</td>
          <td>{item.sdept}</td>
          <td>{item.syear}</td>
          <td><button className='py-1 px-4 bg-white text-green-500 font-[500] rounded-sm mx-1' onClick={()=>{usenavigate(`/update/${item._id}`)}}>Update</button>
           <button className='py-1 px-4 bg-white font-[500] text-red-500 rounded-sm mx-1' onClick={()=>{handleDelete(item._id)}}>Delete</button></td>
        </tr>
            </>
          })
        }
   
      </tbody>
     
       </table>
     </div>
    </div>
  )
}

export default Homepage