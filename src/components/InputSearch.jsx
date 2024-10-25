import React, { useState, useEffect } from 'react';

const InputSearch = ({ setSearchParams, searchParams }) => {
    const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');
    useEffect(() => {
        setSearchInput(searchParams.get('search') || '');
    }, [searchParams]);

    const handleSearch = () => {
        setSearchParams({ search: searchInput });
    }

    return (
        <div className="input-group">
            <input
                type="text"
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)} 
                className="search-input"
                placeholder="Search..." 
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
}

export default InputSearch;
