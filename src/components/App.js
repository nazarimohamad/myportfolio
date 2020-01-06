import React from 'react';
import '../style.scss'
import Hero from './Hero';
import PixiImage from './PixiImage';
import Projects from './Projects';

const App = () => {
  return (
    <div className='app'>
      <Hero />
      <PixiImage />
      <Projects />
    </div>
  )
};

export default App;