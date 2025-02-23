import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import Card from './Card';

function Polls() {
    const [list, setList] = useState([
        { location: "Delhi", disasterType: "tsunami" },
        { location: "Mumbai", disasterType: "volcano" },
    ]);

    // Example of adding a new item to the list
    useEffect(() => {
        const newItem = { location: "Delhi", disasterType: "volcano" };
        setList(prevList => [...prevList, newItem]);
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <Hero />
            <div className='flex justify-center'>
                {list.map((item, index) => (
                    <Card 
                        key={index} // Add a unique key for each item
                        location={item.location} 
                        disasterType={item.disasterType} 
                    />
                ))}
            </div>
            <Link to='/Addpoll' className='text-white bg-red-600 py-2.5 px-5 rounded-2xl flex justify-self-center justify-center my-4'>
                <span className='font-bold align-middle mx-2'>+</span>
                <text className='align-middle'>Add Post</text>
            </Link>
        </div>
    );
}

export default Polls;