import React from 'react';
import Education from '../Education/education.js';
import Experience from '../Experience/experience.js';
import './EducationExperienceContainer.css'; // Assuming you have CSS for the container

const EducationExperienceContainer = () => {
  return (
    <div className="sectionsContainer">
      <Education />
      <Experience />
    </div>
  );
};

export default EducationExperienceContainer;