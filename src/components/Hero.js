import React from 'react';
import Particles from 'react-particles-js';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import mo from '../images/mo2.png';
import '../style.scss';


class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      move: false
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({move: !this.state.move})
    }, 800);
  }



  render() {
    return (
        <div className="hero">
          <div className="nav">
            <ul className="nav-link">
              <li><FaGithub /></li>
              <li><FaLinkedinIn /></li>
            </ul>
          </div>
          <Particles
            className="particle"
            params={{
              "particles": {
                "number": {
                  "value": 4,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#0092ab"
                },
                "shape": {
                  "type": "polygon",
                  "stroke": {
                    "width": 0,
                    "color": "#ffffff"
                  },
                  "polygon": {
                    "nb_sides": 6
                  }
                },
                "opacity": {
                  "value": 0.1,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 130,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed":10,
                    "size_min": 40,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 200,
                  "color": "#ffffff",
                  "opacity": 0.5,
                },
                "move": {
                  "enable": false,
                  "speed": 1,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}
          />
          <div className="headline">
            <a type="button" href={mo} download>Download Resume</a>
          </div>
          <div className="arrow">
            <div className={`circle ${this.state.move === true ? 'move' : null}`} ref="circle"/>
          </div>
      </div>
    );
  }
}


export default Hero;
