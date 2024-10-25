import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


const CVPage = () => {
    const navigate = useNavigate();
    //const location = useLocation();
    //const { formData } = location.state;
    //const { personalDetails, education, experience } = formData;

    const storedCVs = JSON.parse(localStorage.getItem('cvs'));
    const { id } = useParams();
    console.log(id);
    console.log(Number(id));

    const formData = storedCVs.find(cv => cv.cvId === Number(id)); 
    const { personalDetails, education, experience} = formData;
    //console.log(formData);
    



    const handleButton = () => {
        navigate('/personal-information', { state: { formData } });
    }

    return (
        <>
            <div className="cv-container">
                <h2 className="cv-title">Curriculum Vitae</h2>

                <div className="cv-section">
                    <h3 className="cv-section-title">Personal Information</h3>
                    <p><strong>Name:</strong> {personalDetails.name} {personalDetails.lastName}</p>
                    {personalDetails?.email && (
                        <p><strong>Email:</strong> {personalDetails.email}</p>
                    )}
                    {personalDetails?.phone && (
                        <p><strong>Phone:</strong> {personalDetails.phone}</p>
                    )}
                    {personalDetails?.birthdate && (
                        <p><strong>Birthdate:</strong> {personalDetails.birthdate}</p>
                    )}
                    {personalDetails?.aboutMe && (
                        <p><strong>About Me:</strong> {personalDetails.aboutMe}</p>
                    )}
                </div>

                <div className="cv-section">
                    <h3 className="cv-section-title">Education</h3>
                    {education?.degree && (
                        <p><strong>Degree:</strong> {education.degree}</p>
                    )}
                    {education?.institution && (
                        <p><strong>Institution:</strong> {education.institution}</p>
                    )}
                    {education?.duration && (
                        <p><strong>Duration:</strong> {education.duration}</p>
                    )}
                    {education?.description && (
                        <p><strong>Description:</strong> {education.description}</p>
                    )}
                </div>

                <div className="cv-section">
                    <h3 className="cv-section-title">Experience</h3>
                    {experience && experience.length > 0 ? (
                        experience.map((exp, index) => (
                            <div key={index} className="cv-experience-entry">
                                {exp?.jobTitle && (
                                  <p><strong>Company:</strong> {exp.jobTitle}</p>
                                )}
                                {exp?.company && (
                                  <p><strong>Company:</strong> {exp.company}</p>
                                )}
                                {exp?.duration && (
                                  <p><strong>Duration:</strong> {exp.duration}</p>
                                )}
                                {exp?.description && (
                                  <p><strong>Description:</strong> {exp.description}</p>
                                )}
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p>No experience listed.</p>
                    )}
                </div>
            </div>

            <div className="edit_container">
                <button className="edit_btn" onClick={handleButton}>Edit</button>
            </div>
        </>
    );
};

export default CVPage;
