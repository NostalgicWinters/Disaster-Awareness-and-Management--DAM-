import React from 'react'
import Hero from './Hero'
import { Link } from 'react-router-dom'
import Card from './Card'
import { useState } from 'react'

function Polls() {

  const [polls, setPolls] = useState([
    { location: "Mumbai", disasterType: "tsunami" },
    { location: "Mt. Fuji", disasterType: "volcano" },
    { location: "Delhi", disasterType: "earthquake" },
  ]);

  const addPoll = (newPoll) => {
    setPolls([...polls, newPoll]);
  };

  return (
    <div>
      <Hero />
      <div className='flex justify-center flex-wrap'>
        {polls.map((poll, index) => (
          <Card key={index} location={poll.location} disasterType={poll.disasterType} />
        ))}
      </div>
      <Link to='/Addpoll' className='text-white bg-red-600 py-2.5 px-5 rounded-2xl flex justify-center my-4 mx-90'>
        <span className='font-bold align-middle mx-2'>+</span>
        <span className='align-middle'>Add Post</span>
      </Link>
    </div>
  )
}

export default Polls;
