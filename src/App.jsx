import { useState } from 'react'


import './App.css'
import Signup from './component/Signup'
import Login from './component/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import EmailError from './component/EmailError'
import Exists from './component/Exists'
import Update from './component/Update'
import HomeZ from './component/HomeZ'
import CreateStudent from './component/CreateStudent'
import Studentindex from './component/Studentindex'
import Listofstudent from './component/Listofstudent'

function App() {
  const [count, setCount] = useState(0)
  const [fill,setFill]=useState()
  return (
    <>
      <div>
       
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
         
          <Route path='/error' element={<EmailError />}></Route>
          <Route path='/usererror' element={<Exists />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
          <Route path='/homeindex' element={<HomeZ />}></Route>
          <Route path='/createstudent' element={<CreateStudent />}></Route>
          <Route path='/studentindex' element={<Studentindex 
          setFill={(ee)=>{setFill(ee)}} />}></Route>
          <Route path='/listofstudent' element={<Listofstudent 
          fill1={fill} />}></Route>

          
        </Routes>
        </BrowserRouter>
        
      </div>
      
    </>
  )
}

export default App
