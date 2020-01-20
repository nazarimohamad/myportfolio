import React from 'react'
import front from '../images/frontend6.png'
import back from '../images/backend2.png'
import design from '../images/design.png'



export default function About() {

   const about = [
     {img: back, title: 'Back End', tech: ["MongoDB", "Express", "Node", "Python"]},
     {img: front, title: 'Front End', tech: ["React", "Vue", "Redux", "JS(ES6)", "HTML", "S-CSS"]},
     {img: design, title: 'Design', tech: ["Photoshop", "Affinity Photo", "Sketch"]},
    ]

   const skills = about.map((item, index) => {
    return (
      <div className="about_card" key={index}>
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <ul className="tech_list">
          {item.tech.map((t, idx) => {
            return <ol className="tech_item" key={idx}>{t}</ol>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div className="about">
      <div className="about_text">
        <p>I am Mohammad Nazari, a full stack web developer with specialist in JavaScript (React for the front-end and Node.js for back-end). I love to work on challenging projects.</p>
      </div>
      <div className="about_skills">
        {skills}
      </div>
    </div>
  )
}
