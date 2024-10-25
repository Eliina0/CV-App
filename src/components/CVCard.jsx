import React from 'react';

const CVCard = ({ cv, onClick, onDelete }) => {
  const { personalDetails, experience, education } = cv;

  return (
    <div className='cv-card'>
      <h3 onClick={onClick} style={{cursor: 'pointer'}}>{personalDetails.name} {personalDetails.lastName}</h3>
      {personalDetails.email && <p>{personalDetails.email}</p>}

      {education?.degree && education?.institution && (
        <p>
          Education: {education.degree} - {education.institution}
        </p>
      )}
      
      {experience?.jobTitle && experience?.company && (
        <p>
          Experience: {experience.jobTitle} at {experience.company}
        </p>
      )}
      <button onClick={onDelete} className='delete_button'>Delete</button>
    </div>
  );
};

export default CVCard;
