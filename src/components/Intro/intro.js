// Import necessary React hooks and components
import React, { useEffect, useState } from 'react';
import './intro.css'; // Importing custom styles
import btnImg from '../../assets/hireme.png'; // Importing button image
import { Link } from 'react-scroll'; // Importing Link component for smooth scrolling
import 'react-slideshow-image/dist/styles.css'; // Importing default styles for the slideshow
import { Slide } from 'react-slideshow-image'; // Importing Slide component for the slideshow
import projects from "../../data/projects.json"; // Importing projects data
import { getImageUrl, shuffleArray } from "../../utils"; // Importing utility functions

const Intro = () => {
  const [shuffledImages, setShuffledImages] = useState([]); // State to hold shuffled images for the slideshow

  useEffect(() => {
    // Shuffling project images on component mount and setting them to state
    setShuffledImages(shuffleArray(projects.flatMap(project => project.imageSrc)));
  }, []); // Dependency array is empty to ensure this effect runs only once on mount

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

export default Intro; // Exporting the Intro component

