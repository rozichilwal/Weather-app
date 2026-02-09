import React from 'react';
import './SearchBar.css';

const SearchBar = ({ city, setCity, onSearch, loading }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch();
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={loading}
                className="search-input"
            />
            <button
                type="submit"
                disabled={loading || !city.trim()}
                className="search-button"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
