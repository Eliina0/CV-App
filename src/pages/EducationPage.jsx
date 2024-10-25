import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EducationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state;

    const [education, setEducation] = useState(formData.education);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation({
            ...education,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/experience', { state: { formData: { ...formData, education } } });
    };

    const handleBack = () => {
        navigate('/personal-information', { state: { formData: { ...formData, education } } });
    };

    return (
        <div className="form_container">
            <h2>Education Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="input_group">
                    <label htmlFor="degree">Degree:</label>
                    <input
                        type="text"
                        name="degree"
                        id="degree"
                        value={education.degree}
                        onChange={handleChange}
                        placeholder="Degree"
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="institution">Institution:</label>
                    <input
                        type="text"
                        name="institution"
                        id="institution"
                        value={education.institution}
                        onChange={handleChange}
                        placeholder="Institution"
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="text"
                        name="duration"
                        id="duration"
                        value={education.duration}
                        onChange={handleChange}
                        placeholder="Duration"
                    />
                </div>

                <div className="input_group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        value={education.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                </div>

                <div className="button_group">
                    <button type="button" className="next_button" onClick={handleBack}>Back to Personal Info</button>
                    <button type="submit" className="next_button">Next: Experience</button>
                </div>
            </form>
        </div>
    );
};

export default EducationPage;
