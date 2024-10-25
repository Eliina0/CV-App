import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
      <div className='homepage'>
        <h1 className='homepage_title'>Welcome</h1>
        <p className='homepage_description'>
          Create and manage your CV effortlessly. Start your journey today!
        </p>
        <button className='homepage_button' onClick={() => navigate('/create-cv')}>Get Started</button>
      </div>
    );
  }
  
  export default HomePage;