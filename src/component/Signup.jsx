import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import username from '../1739242126059.png'
import useremail from '../1739242126017.png'
import userpassword from '../1739242126040.png'
function Signup() {
    const usenavigate = useNavigate()
    const [name,setName] =useState()
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    axios.defaults.withCredentials = true;
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    const validate = () => {
        let formErrors = { username: '', email: '', password: ''};
        let isValid = true;
    
        // Username validation (required)
        if (!name) {
          formErrors.username = 'Username is required';
          isValid = false;
        }
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email) {
          formErrors.email = 'Email is required';
          isValid = false;
        } else if (!emailPattern.test(email)) {
          formErrors.email = 'Invalid email format';
          isValid = false;
        }
        if (!password) {
            formErrors.password = 'Password is required';
            isValid = false;
          } else if (password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters';
            isValid = false;
          } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
            formErrors.password = 'Password must contain letters and numbers';
            isValid = false;
          }
          setErrors(formErrors);
          return isValid;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (validate()) {
        
            console.log('Form submitted successfully!');
            // Optionally reset form
            
            setErrors({ username: '', email: '', password: ''});

            axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/`,{name,email,password})
           .then(result => {console.log(result)
            if(result.data==='email already exist'){
                usenavigate('/usererror')
            }
            else{
                usenavigate('/login')
            }
           
         })
           .catch(err=>console.log(err))
        }
        
    }
  return (
    <div className=' h-[100vh] flex items-center justify-center w-[100%] back'>
    <div className='bg-[#fbfbfb1a] rounded-md p-6   '>
        <h2 className='text-center font-bold text-[#ffffff]'>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
            <div>
             <label htmlFor="name" className='font-[500] block py-1 text-[#ffffff]'>Name <img src={username} className='w-[14px] inline' alt="" /></label>
             <input type="text" className='border border-white place text-[#ffff]  w-[300px] font-[500] h-[40px] pl-2 outline-none rounded-[4px] bg-[#ffffff17]' id='name' placeholder='Enter your name' 
             onChange={(e)=>{
                setName(e.target.value)
             }}
             />
              {errors.username && <p style={{ color: 'red' }}  className='font-[500]'>{errors.username}</p>}
            </div>
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
                <button type='submit' className='bg-white text-[#10391b]  px-4 py-1  rounded-md font-[500]'>REGISTER</button>
            </div>
        </form>
        <div className=''>
            <p className='inline text-white text-[14px]'>Already Have an Account? </p>
            <span onClick={()=>{
                usenavigate('/login')
            }} className='cursor-pointer text-white  text-[15px]'>Login</span>
        </div>
    </div>
    </div>
    
  )
}

export default Signup