import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
