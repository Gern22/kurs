import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContextProvider.jsx';
import MovieCard from '../components/mivieCard/MovieCard';

const ForYou = () => {
  const {user} = useContext(UserContext);
  const [movies, setMovies] = useState([]);
  const userContext = useContext(UserContext);

  const myGreatestSortedFunction = (films) => {
    const preferences = user?.preferences || [];
    const filteredFilms = films.filter((filmData) => {
      return preferences.some((preference) => filmData.genres.includes(preference));
    });

    console.log(films)
    console.log(filteredFilms)
    setMovies(filteredFilms);
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const response = await fetch('https://yts.mx/api/v2/list_movies.json');
        const {data} = await response.json();

        myGreatestSortedFunction(data?.movies);
      } catch(error){
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>{user ? 'For You Page' : 'Please login to see ad some text'}</h2>
      {
        user && (
          <div className="movie-container">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} isRecommended={movie?.isRecommended}/>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default ForYou;
