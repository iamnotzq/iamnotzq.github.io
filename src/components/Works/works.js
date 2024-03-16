import React from 'react';
import './works.css';
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Works = () => {
  return (
    <section id = 'works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>This is my portfolio and my works details</span>
        <VerticalTimeline layout='1-column-left' lineColor='#846d62'>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentClassName="custom-content"
              contentArrowClassName="custom-content-arrow"
              iconClassName="custom-icon"
              date={project.date} // Replace with your project date
              icon={<img src={getImageUrl(project.skillImg)}/>}
            >
              <div className='timelineBox'>
                <img  className='timelineImage' src={getImageUrl(project.imageSrc)} alt={project.title}/>
                  <div className='infoBox'>
                    <div className="skillsContainer">
                      {project.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill">{skill}</span>
                      ))}
                    </div>
                    <h3 className="vertical-timeline-element-title">{project.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{project.description}</h4>
                    <p>
                      {project.description}
                    </p>
                    <div className='buttonBox'>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </section>
  );
}

export default Works;