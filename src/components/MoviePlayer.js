import React from 'react';
import ReactPlayer from 'react-player';

const MoviePlayer = ({ trailerCode }) => {
    return (
        <div>
            <h3>Trailer</h3>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailerCode}`}
                controls
                width="100%"
                height="400px"
            />
        </div>
    );
};

export default MoviePlayer;
