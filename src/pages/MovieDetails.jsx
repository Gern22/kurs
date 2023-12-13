
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider.jsx';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const { user, setUser,changeUserPreferences } = useContext(UserContext);
  console.log(user)



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
          <img src={movieDetails.medium_cover_image} alt={movieDetails.title}/>
          <h3>Genres: {movieDetails.genres.join(', ')}</h3>


          <button onClick={() => changeUserPreferences(movieDetails.genres)}>
            Добавить в избранное
          </button>


          {movieDetails.yt_trailer_code && (
            <div>
              <h3>Trailer</h3>
              <iframe
                title="trailer"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movieDetails.yt_trailer_code}?controls=0`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
