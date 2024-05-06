import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        if (value.toLowerCase().includes('o')) {
            setErrorMessage('Por favor, ¡Nombres de usuario sin la letra o!');
        } else {
            setErrorMessage('');
            setUsername(value);
        }
    };

    const handleRegister = () => {
        if (username.trim() === '' || username.toLowerCase().includes('o')) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('Usuario registrado correctamente');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={handleChange}
            />
            <button onClick={handleRegister}>Registrarse</button>
            <p>{username}</p>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default Login;
