import React from 'react'
import it from './it.jpg'
import cse from './cse.jpg'
import mech from './mech.jpg'
import auto from './auto.jpg'
import civil from './civil.jpg'
import eee from './eee.jpg'
import ece from './ece.jpg'
import '../App.css'
import { useNavigate } from 'react-router-dom'



function Studentindex({setFill}) {
     const usenavigate = useNavigate()
     const deptarray = [{
        id:0,
        unikey:'IT',
        name:'INFORMATION TECHNOLOGY',
        image:it,
    },
    {
        id:1,
        unikey:'CSE',
        name:'COMPUTER SCIENCE AND ENGINEERING',
        image:cse,
    },
    {
        id:2,
        unikey:'MECH',
        name:'MECHANICAL ENGINEERING',
        image:mech,
    },
    {
        id:3,
        unikey:'EEE',
        name:'ELECTRICAL AND ELECTRONICS ENGINEERING',
        image:eee,
    },
    {
        id:4,
        unikey:'ECE',
        name:'ELECTRONICS AND COMMUNICATION ENGINEERING',
        image:ece,
    },
    {
        id:5,
        unikey:'AUTO',
        name:'AUTOMOBILE ENGINEERING',
        image:auto,
    },
    {
        id:6,
        unikey:'CIVIL',
        name:'CIVIL ENGINNERING',
        image:civil,
    },
    ]
  return (
    <div className='bg-[#f4f5f46c] min-h-screen'>
        <div className='bg-white backg text-center py-4 text-white font-bold'>
            <h2>DEPARTMENT OF STUDENTS</h2>
        </div>
        <div className='grid grid-cols-3 max-md:grid-cols-2  gap-10 p-10 max-sm:p-3 max-sm:gap-3'>
            {
                deptarray.map((item,index)=>{
                    return<>
                    <div key={item.id} className='bg-white p-10 max-lg:p-4 rounded-md shad cursor-pointer' onClick={()=>{usenavigate('/listofstudent')
                        setFill(item)
                    }}>
                        <img src={item.image} alt="" className='text-center p-4 max-sm:p-2'/>
                        <h2 className='text-center font-[500] max-sm:text-[12px] text-gray-500 mt-4'>{item.name}</h2>

                    </div>
                    </>
                })
            }
        </div>
    </div>
  )
}

export default Studentindex