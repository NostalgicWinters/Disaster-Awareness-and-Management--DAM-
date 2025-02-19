import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'

function About() {
  return (
    <div>
        <Hero />
        <div className='bg-black blur-xs' style={{zIndex:-1, width:"90%", height:"100%", position:"absolute", opacity:"70%", margin:"3rem" }} ></div>
        <div className=' text-white' style={{marginTop:"4rem", marginBottom:"4rem", marginLeft:"4rem", marginRight:"8rem"}}>
            <h1 className='text-white text-5xl font-bold m-4'>About Us</h1>
            <h2 className='font-bold text-3xl m-2 mt-4'>Our Mission</h2>
            <p className='m-2 text-xl' >At Disaster Awareness and Management (DAM), we aim to leverage technology to enhance disaster preparedness, response, and relief efforts. Our platform aggregates real-time data from wikipedia and other sources to detect and track natural disasters, providing timely and accurate information to those in need.</p>
            <h2 className='font-bold text-3xl m-2 mt-4'>What we do:</h2>
            <ul className='m-2 text-xl' >
                <li>Real-Time Disaster Monitoring: We collect and analyze social media updates to identify disaster events as they unfold.</li>
                <li>Interactive Mapping: Using the OpenStreetMap API, we visualize affected areas, helping responders and communities stay informed.</li>
                <li>Data-Driven Insights: Our database stores relevant disaster information, enabling better decision-making for relief efforts.</li>
            </ul>
            <h2 className='font-bold text-3xl m-2 mt-4'>Why It Matters</h2>
            <p className='m-2 text-xl' >In times of crisis, speed and accuracy can save lives. By harnessing the power of social media and AI, we provide a centralized, accessible, and real-time disaster awareness system for individuals, organizations, and first responders.</p>
            <h2 className='font-bold text-3xl m-2 mt-4'>Join Us</h2>
            <p className='m-2 text-xl' >We are committed to improving disaster response through innovation and collaboration. Whether you're a developer, researcher, or someone passionate about disaster relief, we welcome your contributions to make this platform even more impactful.</p>
        </div>
    </div>
  )
}

export default About