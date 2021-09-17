import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return (
        <div className='searchbox'>
            <input type="text" /><br />
            <button>Search</button>
        </div>
    );
}

export default SearchBox;
