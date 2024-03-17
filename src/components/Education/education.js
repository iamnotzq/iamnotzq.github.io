import React from 'react';
import './education.css';
import educations from "../../data/education.json";
import { getImageUrl } from "../../utils";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <section id = 'education'>
        <h2 className='educationTitle'>My Education</h2>
        <span className='educationDesc'>This is my portfolio and my works details</span>
        <VerticalTimeline layout='1-column-left' lineColor='#846d62'>
          {educations.map((education, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentClassName="custom-content"
              contentArrowClassName="custom-content-arrow"
              iconClassName="custom-icon"
              date={education.date} // Replace with your project date
              icon={<img src={getImageUrl(education.schoolImg)}/>}
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

export default Education;