import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/mivieCard/MovieCard';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const response = await fetch('https://yts.mx/api/v2/list_movies.json');
        const {data} = await response.json();
        console.log(data);
        setMovies(data.movies);
      } catch(error){
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    // Проверяем, есть ли фильмы и фильтруем по жанру "Action"
    // if(movies.length > 0){
    //   const filtered = movies.filter(movie => movie.genres.includes('Action'));
    //   setFilteredMovies(filtered);
    // }
  }, [movies]);

  return (
    <div className="movie-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
};

export default MovieList;
