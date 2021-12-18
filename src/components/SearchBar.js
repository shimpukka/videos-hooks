import React, { useState } from 'react';

const SearchBar = ( { onFormSubmit } ) => {
    const [ term, setTerm ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
                <form onSubmit={onSubmit} className="ui form">
                    <div className="field">
                    <label htmlFor="search-input">Search for a video</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} type="input" placeholder="Type some text" id="search-inputs" />
                    </div>
                </form>
        </div>
    );
}

export default SearchBar;
