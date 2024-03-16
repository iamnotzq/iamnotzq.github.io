import React from 'react';
import './experience.css';
import projects from "../../data/experience.json";
import { getImageUrl } from "../../utils";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <section id = 'experience'>
        <h2 className='experienceTitle'>My Experience</h2>
        <span className='experienceDesc'>This is my portfolio and my works details</span>
        <VerticalTimeline layout='1-column-right' lineColor='#846d62'>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--experience"
              contentClassName="custom-content"
              contentArrowClassName="custom-content-arrow"
              iconClassName="custom-icon"
              date={project.date} // Replace with your project date
              icon={<img src={getImageUrl(project.companyImg)}/>}
            >
             
              
              <div className='experienceBox'>
              <h3 className="vertical-timeline-element-title">{project.company}</h3>
              <h4 className="vertical-timeline-element-subtitle">{project.title}</h4>
              {project.description.split('. ').map((sentence, index, array)=>(
                  <p key={index}>
                    {sentence}{index <array.length-1 ? '.': ''}
                  </p>
                  ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </section>
  );
}

export default Experience;