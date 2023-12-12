import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({currentUser, onGenreChange, genres}) => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/for-you">For You</Link>
          </li>
          <li>
            {currentUser ? (
              <span>Welcome, {currentUser.username}!</span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          {/* Другие ссылки в вашем меню */}
        </ul>
      </nav>
    </header>
    {currentUser && (
      <div>
        {/* Дополнительные элементы интерфейса для авторизованного пользователя */}
      </div>
    )}
  </div>
);

export default Header;
