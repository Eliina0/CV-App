import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CVPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state;

    const { personalDetails, education, experience } = formData;

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
                    <p><strong>Email:</strong> {personalDetails.email}</p>
                    <p><strong>Phone:</strong> {personalDetails.phone}</p>
                    {personalDetails?.address && (
                        <p><strong>Address:</strong> {personalDetails.address}</p>
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
                                <p><strong>Job Title:</strong> {exp.jobTitle}</p>
                                <p><strong>Company:</strong> {exp.company}</p>
                                <p><strong>Duration:</strong> {exp.duration}</p>
                                <p><strong>Description:</strong> {exp.description}</p>
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
