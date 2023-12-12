// components/GenreFilterButton.js
import React from 'react';

const GenreFilterButton = ({ genres, onGenreChange }) => {
    const handleGenreChange = (e) => {
        const selectedGenre = e.target.value;
        onGenreChange(selectedGenre);
    };

    return (
        <label htmlFor="genreFilter">
            Filter by Genre:
            <select id="genreFilter" onChange={handleGenreChange}>
                <option value="all">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default GenreFilterButton;
