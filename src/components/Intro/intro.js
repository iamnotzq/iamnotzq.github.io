import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
import '../../../node_modules/react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

const Intro = () => {
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
        {projects.map((project, id) => {
          return(
            <div key={id} className='each-slide-effect'>
              <div className='image-container'>
               <img src={getImageUrl(project.imageSrc)} alt={project.title} className='project-image'/>
            </div>
            </div>
          );
        })}
      </Slide>
      </div>
        
    </section>
  )
}

export default Intro;