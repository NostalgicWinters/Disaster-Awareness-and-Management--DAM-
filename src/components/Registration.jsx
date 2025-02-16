import React, { useState } from 'react'
import Hero from './Hero'

function Registration() {

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');

  return (
    <div>
        <Hero />
        <div className='bg-black opacity-70 flex flex-col justify-between absolute' style={{left:"35%", top:"25%", borderRadius:"5%"}}>
            <h1 className='text-white text-3xl p-5 mx-20'>Registration Form</h1>
            <input type='text' placeholder='Email' className='text-white p-4 mr-20 ml-5 my-2' value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
            <input type='text' placeholder='Mobile no.' className='text-white p-4 mr-20 ml-5 my-2'></input>
            <input type='text' placeholder='Location' className='text-white p-4 mr-20 ml-5 mt-2 mb-4'></input>
            <button className='text-white bg-red-700 p-4 ml-4 mr-4 mt-4 mb-6 registerBtn' style={{borderRadius:"1000px"}}>Register</button>
        </div>
    </div>
  )
}

export default Registration