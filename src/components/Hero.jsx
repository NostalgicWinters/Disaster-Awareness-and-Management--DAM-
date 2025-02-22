import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
        <video loop autoPlay muted playsInline typeof='background-clip' style={{zIndex:-1, width:"100%", position:"absolute", opacity:70}}>
            <source src='/hero-vid.mp4' type='video/mp4'></source>
        </video>
        <div className='flex justify-between'>
            <div>
                <b className='text-white text-3xl p-2'>Disaster Awareness And Management (DAM)
                </b>

            </div>
            <div className='flex align-middle'>
                <Link className='text-white text-2xl p-3 font-dm-sans clickableLinks' to='/'><b>Home</b></Link>
                <Link className='text-white text-2xl p-3 font-dm-sans clickableLinks' to="/registration"><b>Report an Incident</b></Link>
                <Link className='text-white text-2xl p-3 font-dm-sans clickableLinks' to="/resources"><b>Resources</b></Link>
                <Link className='text-white text-2xl p-3 font-dm-sans clickableLinks'><b>Volunteer</b></Link>
                <Link className='text-white text-2xl p-3 font-dm-sans clickableLinks' to="/About"><b>About</b></Link>
            </div>
        </div>
        

        
    </div>
  )
}

export default Hero
