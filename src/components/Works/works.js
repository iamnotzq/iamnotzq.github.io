// Import necessary React components and styles
import React from 'react';
import './works.css'; // Custom CSS for styling the works/portfolio section
import projects from "../../data/projects.json"; // Importing projects data from JSON file
import { getImageUrl } from "../../utils"; // Utility function to get image URLs
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'; // Components for creating a vertical timeline
import 'react-vertical-timeline-component/style.min.css'; // Default styles for the timeline
import '../../../node_modules/react-slideshow-image/dist/styles.css'; // Default styles for the slideshow
import { Slide } from 'react-slideshow-image'; // Component for creating a slideshow

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2> 
        <span className='worksDesc'>This is my portfolio and my works details</span> 
        <VerticalTimeline layout='1-column-left' lineColor='#846d62'> 
          {projects.map((project, index) => ( // Mapping through the projects data to display each project
            <VerticalTimelineElement
              key={index} // Unique key for each project
              className="vertical-timeline-element--work" // Custom CSS class for styling
              contentClassName="custom-content" // Custom CSS class for the content
              contentArrowClassName="custom-content-arrow" // Custom CSS class for the content arrow
              iconClassName="custom-icon" // Custom CSS class for the icon
              date={project.date} // Displaying the project date
              icon={<img src={getImageUrl(project.skillImg)} alt={`${project.title} skill`} />} // Displaying the project's related skill icon
            >
              <div className='timelineBox'>
                <div className='imageContainer'>
                  <Slide> 
                    {project.imageSrc.map((src, imgIndex) => (
                      <div key={imgIndex} className='each-slide-effect'>
                        <div className='timelineImage'>
                          <img src={getImageUrl(src)} alt={`${project.title} slide ${imgIndex + 1}`} className='timelineImage'/>
                        </div>
                      </div>
                    ))}
                  </Slide>
                </div>
                <div className='infoBox'>
                  <div className="skillsContainer">
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill">{skill}</span> // Displaying each skill associated with the project
                    ))}
                  </div>
                  <h3 className="vertical-timeline-element-title">{project.title}</h3> 
                  <h4 className="vertical-timeline-element-subtitle">{project.subTitle}</h4> 
                  <p>{project.description}</p> 
                  <div className='buttonBox'> 
                    {project.document && <a href={getImageUrl(project.document)} target="_blank" rel="noopener noreferrer">Documentation</a>}
                    {project.drive && <a href={project.drive} target="_blank" rel="noopener noreferrer">Google Drive</a>}
                    {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>}
                    {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer">Website</a>}
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </section>
  );
}

export default Works; // Exporting the Works component
