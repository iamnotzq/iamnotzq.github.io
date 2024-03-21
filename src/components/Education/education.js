// Importing React and necessary components
import React from 'react';
import './education.css'; // Importing custom CSS for styling
import educations from "../../data/education.json"; // Importing education data from JSON file
import { getImageUrl } from "../../utils"; // Utility function to generate image URLs
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'; // Components for creating a vertical timeline
import 'react-vertical-timeline-component/style.min.css'; // Default styles for the timeline

const Education = () => {
  return (
    <section id='education'>
        <h2 className='educationTitle'>My Education</h2> 
        <span className='educationDesc'>This is my education.</span> 
        <VerticalTimeline layout='1-column-left' lineColor='#846d62'> 
          {educations.map((education, index) => ( // Mapping through education data to display each entry
            <VerticalTimelineElement
              key={index} // React key for list items
              className="vertical-timeline-element--education" // Custom CSS class for styling
              contentClassName="custom-content" // Custom CSS class for content
              contentArrowClassName="custom-content-arrow" // Custom CSS class for the content arrow
              iconClassName="custom-icon" // Custom CSS class for the icon
              date={education.date} // Displaying the date of the education period
              icon={<img src={getImageUrl(education.schoolImg)}/>} // Displaying the school's image
            >
              
              <div className='educationContainer'>
                <div className='educationBox'>
                  <h3 className="vertical-timeline-element-title">{education.school}</h3> 
                  <h4 className="vertical-timeline-element-subtitle">{education.study}</h4> 
                  {education.grades && <p className='grades'>{education.grades}</p>} 
                </div>
                {education.extraHeader && <div className='extraBox'>
                  {education.extraHeader && <h4 className='extraHeader'>{education.extraHeader}</h4>} 
                  {education.extraInfo1 && <p className='extraInfo1'>{education.extraInfo1}</p>} 
                  {education.extraInfo2 && <p className='extraInfo2'>{education.extraInfo2}</p>} 
                </div>}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </section>
  );
}

export default Education; // Exporting the Education component