import React, { useContext, useEffect, useState } from 'react';
import MovieCard from '../../components/mivieCard/MovieCard';
import './MovieList.css';
import { UserContext } from '../../context/UserContextProvider';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const response = await fetch('https://yts.mx/api/v2/list_movies.json');
        const {data} = await response.json();
        setMovies(data.movies);
      } catch(error){
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    //TODO sorted movies by userContext.user.preferences
    // and add which movies are recommended to FilteredMovies
    setFilteredMovies(movies);
  }, [movies]);

  return (
    <div className="movie-container">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} isRecommended={movie?.isRecommended}/>
      ))}
    </div>
  );
};

export default MovieList;
