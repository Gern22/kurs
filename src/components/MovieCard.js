// components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
    <Link to={`/movie/${movie.id}`}>
        <div className={`movie-card ${movie.title === 'Apolonia, Apolonia' ? 'apolonia' : ''}`}>
            <div className="movie-card-link">
                <figure>
                    <img className="cover-img" src={movie.medium_cover_image} alt={movie.title} />
                    <figcaption>
            <span className="star">
              <img
                  src="https://m.media-amazon.com/images/G/01/imdb/images/plugins/imdb_star_22x21-2889147855._CB470047273_.png"
                  alt=""
              />
            </span>
                        <h2 className="rating">{movie.rating} / 10</h2>
                        {movie.genres.map((genre) => (
                            <h3 key={genre} className="genre">
                                {genre}
                            </h3>
                        ))}
                    </figcaption>
                </figure>
            </div>
        </div>
    </Link>
);

export default MovieCard;
