import React, { useEffect } from 'react';
import mo from '../images/mo2.png';
import sublock from '../images/sublock.png';
import bteks from '../images/bteks.png';
import portfolio from '../images/portfolio.png';
import shoe from '../images/shoe.png';
import { FaReact, FaHtml5 } from 'react-icons/fa';



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
            style={{backgroundImage: `url(${item.image})`, color:`${item.color}`}}
            data-id={index}
            ref={(node) => itemRef.push(node)}
            onClick={handleItemSize}
          >
            <h2>{item.top}</h2>
            <p>{item.middle}<br></br><span style={{color:'#d4700f '}}>{item.skill}</span></p>
            <ul>
              <li><a href={item.show}>View</a></li>
              <li><a href={item.git}>Github</a></li>
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default Projects;

const aboutMe = "My name is Mohammad Nazari, a Full-stack web developer with industry experience building websites and web applications. I specialize in JavaScript (React for the front-end and Node.js for back-end)."

const data = [
  {image: portfolio},
  {image: sublock, color: '#162d33', show: 'http://sublock.co', git:'https://github.com/nazarimohamad/sublock'},
  {image: '', top: 'About me', middle: aboutMe, skill:'React, Redux, Vue, MongoDB, Express'},
  {image: bteks, color: '#162d33', show: 'http://www.bteks.co/'},
  {image: shoe, color: '#162d33', show: 'https://topshoes.herokuapp.com/', git:'https://github.com/nazarimohamad/ecomerece'},
]