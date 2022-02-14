import React, { useState } from 'react';
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term)
  }
  return (
    <div className=''>
      <div className="ui search-bar segment">
        <form className='ui form' onSubmit={onSubmit}>

          <div className='field'>
            <label>Search For A video</label>
            <input type="text" placeholder="Search..." value={term}
              onChange={(e) => setTerm(e.target.value)} />
          </div>
        </form>

      </div>
    </div>
  );
}

export default SearchBar;
