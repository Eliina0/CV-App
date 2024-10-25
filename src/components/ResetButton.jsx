import React from 'react';

const ResetButton = ({ setSearchParams }) => {
    const handleClean = () => {
        setSearchParams({});
    };

    return (
        <button onClick={handleClean} className="reset-button">Clean</button>
    );
};

export default ResetButton;
