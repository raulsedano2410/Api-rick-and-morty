import React from 'react';
import title from '../assets/images/title.svg'


const Interface = () => {
    return (
        <div>
            <img src={title} alt="title" />
            <p className='paragraph'>
                The series follows the misadventures of a scientist, Rick, and his easily influenced grandson Morty,
                who spend their time between domestic life and intergalactic space, time, and travel.
                Meet the characters of each trip by entering the ID of each trip that are from 1 to 126
            </p>
        </div>
    );
};

export default Interface;