import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formData = {
    personalDetails: {},
    education: {},
    experience: []
}

const MultiStepForm = () => {
    const navigate = useNavigate();

    const goToNextStep = () => {
        navigate('/personal-information', { state: { formData } });
    };

    return (
        <div className='button_container'>
            <h2>Click start to begin the process</h2>
          <button className='search-button' onClick={goToNextStep}>
            Start
          </button>
        </div>
    );
};

export default MultiStepForm;
