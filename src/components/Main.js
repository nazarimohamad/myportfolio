import React from 'react';
import Hero from './Hero';
import PixiImage from './PixiImage';
import '../style.scss';


const Main  = () => {
  return (
    <div className='main'>
      <Hero />
      <PixiImage />
    </div>
  )
}

export default Main;