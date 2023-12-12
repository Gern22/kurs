import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoviePlayer from './MoviePlayer';

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
                const data = await response.json();
                setMovieDetails(data.data.movie);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div>
            {movieDetails && (
                <div>
                    <h2>{movieDetails.title}</h2>
                    <p>{movieDetails.description_full}</p>
                    <img src={movieDetails.medium_cover_image} alt={movieDetails.title} />
                    <h3>Genres: {movieDetails.genres.join(', ')}</h3>

                    {movieDetails.yt_trailer_code && <MoviePlayer trailerCode={movieDetails.yt_trailer_code} />}
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
