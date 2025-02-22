import React from 'react'
import MapComponent from './MapComponent'
import Hero from './Hero'

function MapPage() {
  return (
    <div>
        <Hero />
        <div className='m-10 rounded-3xl'>
            <MapComponent />
        </div>
    </div>
  )
}

export default MapPage