import React from 'react'
import Hero from './Hero'
import { Link } from 'react-router-dom'
import Card from './Card'

function Polls() {
  return (
    <div>
      <Hero />
      <div className='flex justify-center'>
        <Card location="Mumbai" disasterType="tsunami" />
        <Card location="Mt. Fuji" disasterType="volcano" />
        <Card location="Delhi" disasterType="earthquake" />
      </div>
      <Link to='/Addpolls' className='text-white bg-red-600 py-2.5 px-5 rounded-2xl flex justify-self-center justify-center my-4'>
        <span className='font-bold align-middle mx-2'>+</span>
        <text className='align-middle'>Add Post</text>
      </Link>
    </div>
  )
}

export default Polls;
