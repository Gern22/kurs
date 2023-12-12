import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList/MovieList';
import MovieDetails from './pages/MovieDetails';
import Header from './components/header/Header';
import ForYou from './pages/ForYou';
import LoginPage from './pages/Login';
import UserContextProvider from './context/UserContextProvider';
import './App.css';

function App(){
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [currentUser, setCurrentUser] = useState(null);

  const genres = ['Action', 'Drama', 'Comedy', 'Fantasy', 'Thriller', 'Sci-Fi', 'Music', 'Horror', 'Documentary', 'War', 'Crime', 'Mystery', 'History', 'Romance', 'Biography', 'Family', 'Sport'];

  return (
    <div className="App">
      <Header/>
      <div className="main">
        <UserContextProvider>
          {/*Add here PreferencesProvider*/}
          <Routes>
            <Route path="/" element={<MovieList/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
            <Route path="/for-you" element={<ForYou/>}/>
            <Route path="/login" element={<LoginPage setCurrentUser={setCurrentUser}/>}/>
          </Routes>
          {/*Add here PreferencesProvider*/}
        </UserContextProvider>
      </div>
    </div>
  );
}

export default App;


