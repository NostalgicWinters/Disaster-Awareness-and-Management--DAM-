import React from 'react'
import { Link } from 'react-router-dom'

function Mainmsg() {
  return (
    <div className="absolute text-center text-white p-4 font-dm-sans"  
            style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                background: "rgba(0, 0, 0, 0.5)",  // Optional background for readability
                borderRadius: "10px" // Optional styling
            }}>
            <h1 className='text-white text-5xl p-3'>Be a Lifeline in Times of Crisis</h1>
            <p className='p-3'>Real-time disaster coordination, reporting and support to help those in need</p>
            <div className='bg-red-600 p-2 rounded-3xl'>
                <Link to="/registeration" className='p-3 clickableLinks'>Report an Incident</Link>
            </div>

    </div>
  )
}

export default Mainmsg
