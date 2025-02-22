import React, { useState } from 'react'
import Hero from './Hero'
import { Link } from 'react-router-dom';

function Registration() {

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');

    const handleRegister = async () => {
        const userData = { email,mobile, location };
    
        try {
            const response = await fetch("http://localhost:5000/registeration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            });
    
            const data = await response.json();
            if (response.ok) {
                alert("Registration Successful!");
            } else {
                alert(data.message || "Registration Failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    <div>
        <Hero />
        <div className='bg-black opacity-70 flex flex-col justify-between absolute' style={{left:"35%", top:"25%", borderRadius:"5%"}}>
            <h1 className='text-white text-3xl p-5 mx-20'>Registration Form</h1>
            <input type='text' placeholder='Email' className='text-white p-4 mr-20 ml-5 my-2' value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
            <input type='text' placeholder='Mobile no.' className='text-white p-4 mr-20 ml-5 my-2' value={mobile} onChange={(event)=>{setMobile(event.target.value)}}></input>
            <input type='text' placeholder='Location' className='text-white p-4 mr-20 ml-5 mt-2 mb-4' value={location} onChange={(event)=>{setLocation(event.target.value)}}></input>
            <Link to="/login" className='clickableLinks'><span className='text-blue-600 underline p-4 mr-20 ml-5 my-2'>Already registered? Login in!</span></Link>
            <button className='text-white bg-red-700 p-4 ml-4 mr-4 mt-4 mb-6 registerBtn' onClick={handleRegister} style={{borderRadius:"1000px"} }>Register</button>
        </div>
    </div>
  )
}

export default Registration
