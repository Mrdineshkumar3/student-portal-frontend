import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import useremail from '../1739242126017.png'
import userpassword from '../1739242126040.png'
function Login() {
  const usenavigate = useNavigate()
 console.log(import.meta.env.VITE_REACT_APP_BACKEND_BASEURL)
  axios.defaults.withCredentials = true;
  const [email,setEmail] =useState()
  const [password,setPassword] =useState()
   const [errors, setErrors] = useState({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
           
            const validate = () => {
                let formErrors = { email: '', password: ''};
                let isValid = true;
            
                // Username validation (required)
              
                
                if (!email) {
                  formErrors.email = 'Email is required';
                  isValid = false;
                } 
                if (!password) {
                  formErrors.password = 'Password is required';
                  isValid = false;
              }
              setErrors(formErrors)
              return(isValid)
            }
  const handleSubmit =  (e) =>{
      e.preventDefault();
    if(validate()){
      console.log('user successfully login!');
        setErrors({ email: '', password: ''});
        axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/login`,{email,password})
        .then(result => {console.log(result)
            if(result.data==="success"){
                usenavigate('/homeindex')
            }
            if(result.data==="No record existed"){
              usenavigate('/error')
            }
            if(result.data==="the password is incorrect"){
              usenavigate('/error')
            }
        })
    }
  }
  return (
    <div className=' h-screen flex items-center justify-center w-[100%] back'>
    <div className='bg-[#fbfbfb1a] rounded-md p-6   '>
        <h2 className='text-center font-bold text-[#ffffff]'>LOGIN</h2>
        <form onSubmit={handleSubmit}>
            
            <div> 
             <label htmlFor="email"  className='font-[500] block py-1 text-[#ffffff]' >Email <img src={useremail} className='w-[15px] inline' alt="" /></label>
             <input type="email"  className='border border-white place text-[#ffff]  w-[300px] font-[500] h-[40px] pl-2 outline-none rounded-[4px]  bg-[#ffffff17]' id='email' placeholder='Enter your email'
               onChange={(e)=>{
                setEmail(e.target.value)
             }}/>
                {errors.email && <p style={{ color: 'red' }}  className='font-[500]'>{errors.email}</p>}
            </div>
            <div>
             <label htmlFor="password"  className='font-[500] block py-1 text-[#ffffff]'>Password <img src={userpassword} className='w-[14px] inline' alt="" /></label>
             <input type="password"  className='border border-white place text-[#ffff]  w-[300px] font-[500] h-[40px] pl-2 outline-none rounded-[4px]  bg-[#ffffff17]' id='password'  placeholder='Enter password'
               onChange={(e)=>{
                setPassword(e.target.value)
             }}/>
              {errors.password && <p style={{ color: 'red' }} className='font-[500]'>{errors.password}</p>}
            </div>
            <div className='flex items-center justify-center py-4'>
                <button type='submit' className='bg-white text-[#10391b]  px-4 py-1  rounded-md font-[500]'>LOGIN</button>
            </div>
        </form>
        <div className=''>
            <p className='inline text-white text-[14px]'>Don't Have an Account? </p>
            <span onClick={()=>{
                usenavigate('/')
            }} className='cursor-pointer text-white  text-[15px]'>Sign up</span>
        </div>
    </div>
    </div>
  )
}

export default Login