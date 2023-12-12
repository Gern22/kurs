// components/MovieList.js
import React, {useContext, useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import {UserContext} from "./UserContextProvider";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

   useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await fetch('https://yts.mx/api/v2/list_movies.json?quality=3D');
             const data = await response.json();
              setMovies(data.data.movies);
          } catch (error) {
               console.error('Error fetching movies:', error);
           }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        // Проверяем, есть ли фильмы и фильтруем по жанру "Action"
        if (movies.length > 0) {
            const filtered = movies.filter(movie => movie.genres.includes('Action'));
            setFilteredMovies(filtered);
        }
    }, [movies]);

    return (
        <div className="movie-container">
            {filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default  MovieList;
