import React, { useState } from 'react'

function Card({disasterType}) {

    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);
    const total = downvote-upvote;


  return (
    <div class="bg-black opacity-70 shadow-lg rounded-lg pt-8 pl-8 pr-8 pb-6 w-80">
        <img src="/volcano.png" alt="Main Image" class="w-full h-40 object-cover rounded" />
        <div class="flex justify-between items-center mt-4">
            <button class="flex items-center space-x-2 bg-green-500 text-white px-2 py-2 rounded m-2 hover:bg-green-600">
              <img src="/thumbsdown.svg" alt="Upvote" class="w-5 h-5" />
              <span>Upvote</span>
            </button>
            <button class="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                <img src="/thumbsdown.svg" alt="Downvote" class="w-5 h-5" />
                <span>Downvote</span>
            </button>
        </div>
        <text className='text-white flex justify-self-center font-dm-sans font-bold text-xl' >Gaziabad</text>
    </div>
  )
}

export default Card
