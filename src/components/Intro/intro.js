import React, { useEffect, useState } from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import projects from "../../data/projects.json";
import { getImageUrl, shuffleArray } from "../../utils";

const Intro = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(shuffleArray(projects.flatMap(project => project.imageSrc)));
  }, []); // Empty dependency array to run once on mount

  return (
    <section id="intro">
      <div className='introbox'>
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className="introName">Zhi Qiang</span><br/>Fresh Graduate</span>
          <p className='introPara'>
            With a Bachelor's degree in Computer Science, specializing in Big Data. Passionate about machine learning and innovation through research, I work well in teams and persistently give my best effort, eager to apply my knowledge and make a significant impact.
          </p>
        </div>
      </div>
      <div className='slide-container'>
        <Slide>
          {shuffledImages.map((src, index) => (
            <div key={index} className='each-slide-effect'>
              <img src={getImageUrl(src)} alt={`Project ${index + 1}`} className='project-image' />
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default Intro;
