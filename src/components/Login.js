// components/Login.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./UserContextProvider";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        // Простая валидация
        if (username.trim() === '' || password.trim() === '') {
            setError('Please enter both username and password.');
            return;
        }

        const query = new URLSearchParams({ username, password });

        fetch(`http://localhost:5001/users?${query}`)
            .then(response => response.json())
            .then(users => users[0])
            .then(user => {
                if (userContext && userContext.onChange && typeof userContext.onChange === 'function') {
                    userContext.onChange(user);
                    navigate('/');
                } else {
                    setError("Invalid user");
                }
            })
            .catch(error => {
                console.error('Error logging in:', error);
                setError('An error occurred during login.');
            });
    };

    return (
        <div>
            <h2>Login Page</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
