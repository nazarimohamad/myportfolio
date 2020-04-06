import React from 'react'
import sublock from '../images/sublock.png';
import bteks from '../images/bteks.png';
import shoe from '../images/shoe.png';
import resort from '../images/resort.png';
import portfolio from '../images/portfolio.png';
import mobilemarket from '../images/mobilemarket.png';

export default function Samples() {

  const items = [
    {img: shoe, title: 'top shoe', github: 'https://github.com/nazarimohamad/ecomerece', view: 'https://topshoes.herokuapp.com/'},
    {img: resort, title: 'shiraz resort', github: 'https://github.com/nazarimohamad/Beach-Resort', view: 'https://shiraz-resort.netlify.com/'},
    {img: mobilemarket, title: 'sublock', github: 'https://github.com/nazarimohamad/mobile-market', view: 'https://mobilemarket.netlify.com/',},
    {img: portfolio, title: 'portfolio',  github: 'https://github.com/nazarimohamad/myportfolio', view: 'https://nazarimohamad.github.io/myportfolio/'},
    {img: bteks, title: 'bteks', view: 'http://www.bteks.co/'},
  ]

 const projects = items.map((item, index) => {
  return (
    <div ky={index} className="image_container">
      <img src={item.img} alt={item.title} />
      <div className="link">
        <a href={item.view} type="button">View</a>
        <a href={item.github} type="button">Github</a>
      </div>

    </div>
  )
})

  return (
    <div className="samples_container">
      <div className="sample_title">
        <h2>My Projects</h2>
        <div />
      </div>
      <div className="samples_project">
      {projects}
      </div>
    </div>
  )
}
