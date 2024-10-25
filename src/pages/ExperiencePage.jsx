
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ExperiencePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state;

    const [experienceList, setExperienceList] = useState(formData.experience);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newExperienceList = [...experienceList];
        newExperienceList[index][name] = value;
        setExperienceList(newExperienceList);
    };

    const addExperience = () => {
        setExperienceList([...experienceList, { jobTitle: '', company: '', duration: '', description: '' }]);
    };

    const removeExperience = (index) => {
        const newExperienceList = experienceList.filter((experienceList, i) => i !== index);
        setExperienceList(newExperienceList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cvData = { ...formData, experience: experienceList };
        let allCVs = JSON.parse(localStorage.getItem('cvs')) || [];

        if (cvData.cvId) {
            allCVs = allCVs.map(cv => cv.cvId === cvData.cvId ? cvData : cv);
        } else {
            cvData.cvId = new Date().getTime();
            allCVs.push(cvData);
        }

        localStorage.setItem('cvs', JSON.stringify(allCVs));
        navigate(`/cv/${cvData.cvId}`, /*{ state: { formData: cvData } }*/);
    };

    const handleBack = () => {
        navigate('/education', { state: { formData: { ...formData, experience: experienceList } } });
    };

    return (
        <div className="form_container">
            <h2>Experience Information</h2>
            <form onSubmit={handleSubmit}>
                {experienceList.map((experience, index) => (
                    <div key={index} className="experience_entry">
                        <h3>Experience {index + 1}</h3>
                        <div className="input_group">
                            <label>Job Title:</label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={experience.jobTitle}
                                onChange={(e) => handleChange(index, e)}
                                placeholder="Job Title"
                            />
                        </div>
                        <div className="input_group">
                            <label>Company:</label>
                            <input
                                type="text"
                                name="company"
                                value={experience.company}
                                onChange={(e) => handleChange(index, e)}
                                placeholder="Company"
                            />
                        </div>
                        <div className="input_group">
                            <label>Duration:</label>
                            <input
                                type="text"
                                name="duration"
                                value={experience.duration}
                                onChange={(e) => handleChange(index, e)}
                                placeholder="Duration"
                            />
                        </div>
                        <div className="input_group">
                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={experience.description}
                                onChange={(e) => handleChange(index, e)}
                                placeholder="Description"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => removeExperience(index)}
                            className="delete_button"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addExperience} className="delete_button" style={{color: 'blue'}}>
                    Add Another Experience
                </button>
                <div className="button_group">
                    <button type="button" className="next_button" onClick={handleBack}>
                        Back to Education
                    </button>
                    <button type="submit" className="next_button">Finish</button>
                </div>
            </form>
        </div>
    );
};

export default ExperiencePage;
