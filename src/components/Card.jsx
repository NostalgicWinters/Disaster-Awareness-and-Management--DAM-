import React, { useState } from 'react'

function Card({disasterType}) {

    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);
    const totalVotes = upvote-downvote;
    const total = upvote+downvote;
    const percentAgree = (upvote/total)*100


  return (
    <div class="bg-black opacity-70 shadow-lg rounded-lg pt-8 pl-8 pr-8 pb-6 w-80 m-2">
        <img src="/volcano.png" alt="Main Image" class="w-full h-40 object-cover rounded" />
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
        <text className='text-white flex justify-self-center font-dm-sans font-bold text-xl' >Ghaziabad</text>
        <text className='text-white'>%age of people who agree: {percentAgree.toFixed(2)}%</text>
        <div className='flex flex-column text-white font-dm-sans p-2'>
            <text className='m-2'>Upvote: {upvote}</text>
            <text className='m-2'>Downvote: {downvote}</text>
        </div>
    </div>
  )
}

export default Card
