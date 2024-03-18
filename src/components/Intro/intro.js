import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
import '../../../node_modules/react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import projects from "../../data/projects.json";
import { getImageUrl, shuffleArray } from "../../utils";

const Intro = () => {
  const shuffledImages = shuffleArray(projects.flatMap(project => project.imageSrc));
  return (
    <section id="intro">
      <div className='introbox'>
        <div className='introContent'>
             <span className='hello'>Hello, </span>
             <span className='introText'>I'm <span className = "introName">Zhi Qiang</span> <br/>Fresh Graduate</span>
             <p className='introPara'>with a Bachelor's degree in Computer Science, specializing in Big Data. Passionate about solving problems and driving innovation, I bring leadership, teamwork, and a commitment to excellence, ready to make an impact.</p>
             <Link className='btnBox'><button className='btn'><img src={btnImg} alt='Hire Me' className="btnImg"/>Hire Me</button></Link>
        </div>
      </div>
      <div className='slide-container'>
      <Slide>
          {shuffledImages.map((src, index) => (
                <div key={index} className='each-slide-effect'>
                  <img src={getImageUrl(src)} alt={`Slide ${index + 1}`} className='project-image' />
                </div>
              ))}
      </Slide>
      </div>
        
    </section>
  )
}

export default Intro;