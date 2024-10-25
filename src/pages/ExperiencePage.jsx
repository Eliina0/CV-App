import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ExperiencePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state;
    const [experience, setExperience] = useState(formData.experience);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience({
            ...experience,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const cvData = { ...formData, experience };
        let allCVs = JSON.parse(localStorage.getItem('cvs')) || [];

        if (cvData.cvId) {
            allCVs = allCVs.map(cv => cv.cvId === cvData.cvId ? cvData : cv);
        } else {
            cvData.cvId = new Date().getTime(); 
            allCVs.push(cvData);
        }

        localStorage.setItem('cvs', JSON.stringify(allCVs));
        navigate('/cv', { state: { formData: cvData } });
    };

    const handleBack = () => {
        navigate('/education', { state: { formData: { ...formData, experience } } });
    };

    return (
        <div className="form_container">
            <h2>Experience Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="input_group">
                    <label htmlFor="jobTitle">Job Title:</label>
                    <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        value={experience.jobTitle}
                        onChange={handleChange}
                        placeholder="Job Title"
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={experience.company}
                        onChange={handleChange}
                        placeholder="Company"
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="text"
                        name="duration"
                        id="duration"
                        value={experience.duration}
                        onChange={handleChange}
                        placeholder="Duration"
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        value={experience.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                </div>

                <div className="button_group">
                    <button type="button" className="next_button" onClick={handleBack}>Back to Education</button>
                    <button type="submit" className="next_button">Finish</button>
                </div>
            </form>
        </div>
    );
};

export default ExperiencePage;
