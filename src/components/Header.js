// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import GenreFilterButton from './GenreFilterButton';

const Header = ({ onGenreChange, genres }) => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/for-you">For you</Link> {/* Переименованная ссылка */}
                    </li>
                    {/* Удалите следующую строку, чтобы удалить ссылку "About" */}
                    {/* <li><Link to="/about">About</Link></li> */}
                    {/* Добавьте другие ссылки на страницы, если необходимо */}
                </ul>
            </nav>
            <GenreFilterButton genres={genres} onGenreChange={onGenreChange} />
        </header>
    );
};

export default Header;
