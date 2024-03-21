// Importing necessary React components and styles
import React from 'react';
import './experience.css';
import projects from "../../data/experience.json"; // Importing project data from a JSON file
import { getImageUrl } from "../../utils"; // Utility function to get image URLs
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'; // Timeline components for displaying experiences
import 'react-vertical-timeline-component/style.min.css'; // Default styles for the timeline

const Experience = () => {
  return (
    <section id='experience'>
        <h2 className='experienceTitle'>My Experience</h2> 
        <span className='experienceDesc'>This is my working experience.</span> 
        <VerticalTimeline layout='1-column-right' lineColor='#846d62'> 
          {projects.map((project, index) => ( // Mapping over the projects data to display each experience
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--experience" // Custom CSS class for styling
              contentClassName="custom-content" // Custom CSS class for the content
              contentArrowClassName="custom-content-arrow" // Custom CSS class for the arrow
              iconClassName="custom-icon" // Custom CSS class for the icon
              date={project.date} // Displaying the project date
              icon={<img src={getImageUrl(project.companyImg)}/>} // Displaying the company image using a utility function
            >
              
              <div className='experienceBox'>
              <h3 className="vertical-timeline-element-title">{project.company}</h3> 
              <h4 className="vertical-timeline-element-subtitle">{project.title}</h4> 
              {project.description.split('. ').map((sentence, index, array)=>( // Splitting the description into sentences for better formatting
                  <p key={index}>
                    {sentence}{index < array.length-1 ? '.': ''} 
                  </p>
                  ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </section>
  );
}

export default Experience; // Exporting the Experience component for use in other parts of the application
