// Создайте новый файл Login.js
// components/Login.js
import React, { useState } from 'react';

const LoginPage = ({ setCurrentUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Ваша логика проверки пользователя (можете использовать API, localStorage и т.д.)
        // В данном примере, мы просто устанавливаем пользователя, если имя пользователя не пустое
        if (username.trim() !== '') {
            setCurrentUser({ username });
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
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
