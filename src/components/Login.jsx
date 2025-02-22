import { useState } from 'react';
import React from 'react'
import Hero from './Hero'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
          const response = await fetch("http://localhost:5001/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email })
          });
  
          const data = await response.json();
          
          if (response.ok) {
              alert("Login Successful!");
              navigate('/');
          } else {
              alert(data.message);
          }
      } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong. Please try again.");
      }
  };
  return (
    <div>
        <Hero />
        <div className='bg-black opacity-70 flex flex-col justify-between absolute' style={{left:"35%", top:"25%", borderRadius:"5%"}}>
            <h1 className='text-white text-3xl p-5 mx-20'>Login</h1>
            <input type='text' placeholder='Email' className='text-white p-4 mr-20 ml-5 my-2' value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
            <Link to="/registration" className='clickableLinks'><span className='text-blue-600 underline p-4 mr-20 ml-5 my-2'>First time user? Register here</span></Link>
            <button className='text-white bg-red-700 p-4 ml-4 mr-4 mt-4 mb-6 registerBtn' style={{borderRadius:"1000px"}} onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}

export default Login;
