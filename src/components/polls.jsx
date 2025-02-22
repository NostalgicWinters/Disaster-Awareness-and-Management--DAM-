import React from 'react'
import Hero from './Hero'
import { Link } from 'react-router-dom'
import Card from './Card'

function Polls() {
  return (
    <div>
      <Hero />
      <div className='flex justify-center'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Polls;
