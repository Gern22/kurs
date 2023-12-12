import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import Header from './components/Header';
import ForYou from './pages/ForYou';
import LoginPage from './pages/Login';

function App() {

    const [selectedGenre, setSelectedGenre] = useState('all');
    const [currentUser, setCurrentUser] = useState(null);

    const genres = ['Action', 'Drama', 'Comedy', 'Fantasy', 'Thriller', 'Sci-Fi','Music','Horror','Documentary','War','Crime','Mystery','History','Romance','Biography','Family','Sport'];

    return (
        <div className="App">
            <Header  />
            <div className="main">
                <Routes>
                    <Route path="/" element={<MovieList />} />
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


