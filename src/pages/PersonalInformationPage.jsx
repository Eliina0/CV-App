import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PersonalInformationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state;
    const [personalDetails, setPersonalDetails] = useState(formData.personalDetails);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails({
            ...personalDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/education', { state: { formData: { ...formData, personalDetails } } });
    };

    return (
        <div className='form_container'>
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit}>
                <div className='input_group'>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={personalDetails.name }
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className='input_group'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={personalDetails.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                    />
                </div>
                <div className='input_group'>
                    <label htmlFor="birthdate">Birthdate</label>
                    <input
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        value={personalDetails.birthdate}
                        onChange={handleChange}
                    />
                </div>
                <div className='input_group'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={personalDetails.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                <div className='input_group'>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={personalDetails.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                    />
                </div>
                <div className='input_group'>
                    <label htmlFor="aboutMe">About Me</label>
                    <textarea
                        name="aboutMe"
                        id="aboutMe"
                        value={personalDetails.aboutMe}
                        onChange={handleChange}
                        placeholder="About Me"
                    />
                </div>
                <div className='button_gr'>
                    <button type="submit" className='next_button'>Next: Education</button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInformationPage;
