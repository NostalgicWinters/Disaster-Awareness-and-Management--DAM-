import React, { useState } from 'react'
import Hero from './Hero'

function Addpoll() {

    const [disastertype, setDisasterType] = useState('');
    const [location, setLocation] = useState('');
    

  return (
    <div>
        <Hero />
        <div className='bg-black opacity-70 m-10 p-5 rounded-2xl'>
            <h1 className='text-white text-3xl font-dm-sans font-bold flex justify-self-center'>CREATE POST</h1>
            <h2 className='text-white my-3 mx-18 text-xl font-dm-sans '>Select the type of disaster you want to report</h2>
            <label className='text-white font-dm-sans'>
                <select id='disasters' className='bg-black opacity-50 p-2 m-2 w-70 border-1 border-white mx-18' value={disastertype}>
                    <option>Select...</option>
                    <option value='volcano'>VolcanicEruption</option>
                    <option value='tsunami'>Tsunami</option>
                    <option value='flood'>Flood</option>
                    <option value='cyclone'>Cyclone</option>
                    <option value='earthquake'>Earthquake</option>
                    <option value='others'>Other disasters</option>
                </select>
            </label>
            <h2 className='text-white m-3 text-xl font-dm-sans mx-18'>Enter your Location</h2>
            <div className='flex flex-row justify-around'>
                <div>
                    <input placeholder='Enter your locality' className='text-white font-dm-sans p-2 mx-2 my-4 opacity-100 border-1 border-white rounded-xl flex justify-self-start w-150' />
                    <input placeholder='Enter your City' className='text-white font-dm-sans p-2 mx-2 my-4 opacity-100 border-1 border-white rounded-xl flex justify-self-start w-150' />
                    <input placeholder='Enter your Country' className='text-white font-dm-sans p-2 mx-2 my-4 opacity-100 border-1 border-white rounded-xl flex justify-self-start w-150' />
                </div>
                <div>
                    <h2 className='text-white m-3 text-xl font-dm-sans ' >Rate the severity of the incident(1-10):</h2>
                    <label className='text-white font-dm-sans'>
                        <select id='numbers' className='bg-black opacity-50 p-2 m-2 w-70 border-1 border-white'>
                            <option>Select...</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </label>
                </div>
            </div>
            
            <button className='flex justify-self-center'><text className='text-white font-dm-sans bg-red-600 px-30 py-2 rounded-xl mx-2 my-5 hover:cursor'>Post</text></button>
        </div>
    </div>
  )
}

export default Addpoll