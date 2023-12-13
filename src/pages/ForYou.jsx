import React, { useContext, useEffect, useState } from 'react';
import MovieList from './MovieList/MovieList';
import { UserContext } from '../context/UserContextProvider.jsx';

const ForYou = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>{user ? 'For You Page' : 'Please login to see ad some text'}</h2>


      <MovieList />
    </div>
  );
};

export default ForYou;
