import React, { useState } from 'react'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom';

function Addpoll({ addPoll }) {

    const [disasterType, setDisasterType] = useState('');
    const [location, setLocation] = useState('');
    const [rate, setRate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!disasterType || !location) {
          alert("Please fill in all fields!");
          return;
        }
    
        // Add new poll
        addPoll({ disasterType, location });
    
        // Redirect to Polls page
        navigate('/Polls');
      };
    

  return (
    <div>
        <Hero />
        <div className='bg-black opacity-70 m-10 p-5 rounded-2xl'>
            <h1 className='text-white text-3xl font-dm-sans font-bold flex justify-self-center'>CREATE POST</h1>
            <h2 className='text-white my-3 mx-18 text-xl font-dm-sans '>Select the type of disaster you want to report</h2>
            <label className='text-white font-dm-sans'>
            <select 
          className='bg-black opacity-50 p-2 m-2 w-70 border border-white'
          value={disasterType}
          onChange={(e) => setDisasterType(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="volcano">Volcanic Eruption</option>
          <option value="tsunami">Tsunami</option>
          <option value="flood">Flood</option>
          <option value="cyclone">Cyclone</option>
          <option value="earthquake">Earthquake</option>
          <option value="others">Other disasters</option>
        </select>
            </label>
            <h2 className='text-white m-3 text-xl font-dm-sans mx-18'>Enter your Location</h2>
            <div className='flex flex-row justify-around'>
                <div>
                    <input placeholder='Enter your locality' className='text-white font-dm-sans p-2 mx-2 my-4 opacity-100 border-1 border-white rounded-xl flex justify-self-start w-150' />
                    <input placeholder='Enter your City' className='text-white font-dm-sans p-2 mx-2 my-4 opacity-100 border-1 border-white rounded-xl flex justify-self-start w-150' value={location}
          onChange={(e) => setLocation(e.target.value)} />
                    <input placeholder='Enter your Country' className='text-white font-dm-sans p-2 mx-2 my-4 opacity-100 border-1 border-white rounded-xl flex justify-self-start w-150' />
                </div>
                <div>
                    <h2 className='text-white m-3 text-xl font-dm-sans ' >Rate the severity of the incident(1-10):</h2>
                    <label className='text-white font-dm-sans'>
                        <select id='numbers' className='bg-black opacity-50 p-2 m-2 w-70 border-1 border-white' value={rate}
          onChange={(e) => setRate(e.target.value)}>
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
            
            <button className='flex justify-self-center rounded-xl px-60 bg-red-600 hover:cursor'><text className='text-white font-dm-sans mx-4 my-2' onClick={handleSubmit}>Post</text></button>
        </div>
    </div>
  )
}

export default Addpoll