import React, { useEffect } from 'react';
import mo from '../images/mo2.png';

const Projects = () => {

  const itemRef = [];
  const largeItem = false;

  useEffect(() => {
    const makeTheMiddleLarge = () => {
      itemRef[2].classList.add('large');
    }
    makeTheMiddleLarge();
  }, [])

  const handleItemSize = (e) => {
    const itemId = e.target.dataset.id;

    itemRef.forEach(item => {
      item.classList.remove('large')
     if(item.dataset.id === itemId) {
        item.classList.add('large')
      }
    });

  }

  return (
    <div className='project'>
      {
        data.map((item, index) => (
          <div
            className='project__item'
            key={index}
            style={{backgroundImage: `url(${item.image})`}}
            data-id={index}
            ref={(node) => itemRef.push(node)}
            onClick={handleItemSize}
          >
            <h2>{item.top}</h2>
            <p>{item.middle}</p>
            <h2>{item.bottom}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Projects;

const aboutMe = "I am a Full-stack web developer with industry experience building websites and web applications. I specialize in JavaScript (React for the front-end and Node.js for back-end) and have professional experience working with Blockchain and AI. I also have experience working with Swift and iOS applications."

const data = [
  {image: mo,top: 'About me', middle: 'description about me', bottom: 'show my button'},
  {image: mo,top: 'About me', middle: 'description about me', bottom: 'show my button'},
  {image: '',top: 'About me', middle: aboutMe, bottom: 'show my button'},
  {image: mo,top: 'About me', middle: 'description about me', bottom: 'show my button'},
  {image: mo,top: 'About me', middle: 'description about me', bottom: 'show my button'},
]