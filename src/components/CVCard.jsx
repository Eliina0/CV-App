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
      
      {experience && experience.length > 0 && (
        <div>
          <h4>Experience:</h4>
          {experience.map((exp, index) => (
            <p key={index}>
              {exp.jobTitle} at {exp.company}
            </p>
          ))}
        </div>
      )}
      <button onClick={onDelete} className='delete_button'>Delete</button>
    </div>
  );
};

export default CVCard;
