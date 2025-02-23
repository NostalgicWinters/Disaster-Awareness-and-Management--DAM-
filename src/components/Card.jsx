import React, { useState } from 'react'

function Card({disasterType, location}) {

    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);
    const totalVotes = upvote-downvote;
    const total = upvote+downvote;
    const percentAgree = (upvote/total)*100

    fetch('http://localhost:5173/polls', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ upvote: {upvote}, downvote: {downvote} })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    


  return (
    <div class="bg-black opacity-70 shadow-lg rounded-lg pt-8 pl-8 pr-8 pb-6 w-80 m-2 my-6">
        {disasterType=="tsunami" && <img src="/tsunami.png" alt="Tsunami" className="w-full h-40 object-cover rounded" />}
        {disasterType=="volcano" && <img src="/volcano.png" alt="Volcanic Eruption" className="w-full h-40 object-cover rounded" />}
        {disasterType=="flood" && <img src='/flood.png' alt='Flood' className="w-full h-40 object-cover rounded" />}
        {disasterType=="cyclone" && <img src='/cyclone.png' alt='Cyclone' className="w-full h-40 object-cover rounded" />}
        {disasterType=="earthquake" && <img src='/earthquake.png' alt='Earthquake' className="w-full h-40 object-cover rounded" />}
        {disasterType=="others" && <img src='/other.png' alt='Disaster' className="w-full h-40 object-cover rounded" />}
        <div class="flex justify-between items-center mt-4">
            <button class="flex items-center space-x-2 bg-green-500 text-white px-2 py-2 rounded m-2 hover:bg-green-600"
            onClick={()=> setUpvote(upvote+1)}
            >
              <img src="/thumbsup.svg" alt="Upvote" class="w-5 h-5" />
              <span>Upvote</span>
            </button>
            <button class="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={()=> setDownvote(downvote+1)}>
                <img src="/thumbsdown.svg" alt="Downvote" class="w-5 h-5" />
                <span>Downvote</span>
            </button>
        </div>
        <text className='text-white flex justify-self-center font-dm-sans font-bold text-xl' >{location}</text>
        <text className='text-white'>%age of people who agree: {percentAgree.toFixed(2)}%</text>
        <div className='flex flex-column text-white font-dm-sans p-2'>
            <text className='m-2'>Upvote: {upvote}</text>
            <text className='m-2'>Downvote: {downvote}</text>
        </div>
    </div>
  )
}

export default Card