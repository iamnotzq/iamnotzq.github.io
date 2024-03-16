import React from 'react';
import './education.css';
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <section id = 'education'>
        <h2 className='educationTitle'>My Education</h2>
        <span className='educationDesc'>This is my portfolio and my works details</span>
        <VerticalTimeline lineColor='#846d62'>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentClassName="custom-content"
              contentArrowClassName="custom-content-arrow"
              iconClassName="custom-icon"
              date="2011 - present" // Replace with your project date
              icon={<img src={getImageUrl(project.skillImg)}/>}
            >
             
              
              <div className='educationBox'>
              <h3 className="vertical-timeline-element-title">{project.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{project.description}</h4>
              <p>
                {project.description}
              </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </section>
  );
}

export default Education;