import React, { useEffect, useState } from 'react';
import CVCard from '../components/CVCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import InputSearch from '../components/InputSearch';
import ResetButton from '../components/ResetButton';

const CVListPage = () => {
  const [cvList, setCvList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();  
  const navigate = useNavigate();

  useEffect(() => {
    const storedCVs = localStorage.getItem('cvs');
    
    if (storedCVs) {
      setCvList(JSON.parse(storedCVs));
    }
  }, []);

  const onClick = (formData) => {
    navigate('/personal-information', { state: { formData } });
  }

  const handleDelete = (cvToDelete) => {
    const updatedCVs = cvList.filter(cv => cv !== cvToDelete);
    setCvList(updatedCVs);
    localStorage.setItem('cvs', JSON.stringify(updatedCVs));
  }

  const search = searchParams.get('search') || '';  
  console.log(searchParams);
  
  const filteredCVs = cvList.filter(cv => {
    const fullName = `${cv.personalDetails.name} ${cv.personalDetails.lastName}`.toLowerCase();
    const degree = cv.education.degree ? cv.education.degree.toLowerCase() : '';
    const jobTitle = cv.experience.jobTitle ? cv.experience.jobTitle.toLowerCase() : '';
  
    return (
      fullName.includes(search.toLowerCase()) || 
      degree.includes(search.toLowerCase()) || 
      jobTitle.includes(search.toLowerCase())
    );
  });

  return (
    <div className='cvList_container'>
      <div className="search-controls">
        <InputSearch setSearchParams={setSearchParams} searchParams={searchParams}/> 
        <ResetButton setSearchParams={setSearchParams} />
      </div>
      {filteredCVs.length > 0 ? (
        <div className="cv-list">
          {filteredCVs.map((cv, index) => (
            <CVCard key={index} cv={cv} onClick={() => onClick(cv)} onDelete={() => handleDelete(cv)}/>
          ))}
        </div>
      ) : (
        <p>No CVs available</p>
      )}
    </div>
  );
};

export default CVListPage;
