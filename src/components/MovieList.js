import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, selectedGenre }) => {
    // Фильтрация фильмов по выбранному жанру
    const filteredMovies = selectedGenre === 'all' ? movies : movies.filter(movie => movie.genres.includes(selectedGenre));

    return (
        <div className="movie-container">
            {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
