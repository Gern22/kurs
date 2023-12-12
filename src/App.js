// App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';
import ForYou from './components/ForYou'; // Импортируйте компонент
import LoginPage from './components/Login';

function App() {

    const [selectedGenre, setSelectedGenre] = useState('all');
    const [movies, setMovies] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
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
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://yts.mx/api/v2/list_movies.json');
                const data = await response.json();
                setMovies(data.data.movies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);



    // Обновите этот массив с новыми жанрами
    const genres = ['Action', 'Drama', 'Comedy', 'Fantasy', 'Thriller', 'Sci-Fi','Music','Horror','Documentary','War','Crime','Mystery','History','Romance','Biography','Family','Sport'];

    return (
        <div className="App">
            <Header  />
            <div className="main">
                <Routes>
                    <Route path="/" element={<MovieList movies={movies}  />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/for-you" element={<ForYou />} /> {/* Используйте компонент ForYou */}
                    <Route path="/login" element={<LoginPage setCurrentUser={setCurrentUser} />} />
                    {/* Добавьте другие маршруты, если необходимо */}
                </Routes>

            </div>
        </div>
    );
}

export default  App;


